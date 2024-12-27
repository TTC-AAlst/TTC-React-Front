import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import { t } from '../../locales';
import { useViewport } from '../../utils/hooks/useViewport';


type TabKey = {
  key: string;
  title: string;
  label?: string;
  show?: boolean;
  headerChildren?: any;
}

type TabbedContainerComponentProps = {
  selectedTab: string;
  tabKeys: TabKey[];
  tabRenderer: (eventKey: string) => (React.ReactElement | null);
  onTabSelect?: (eventKey: string) => void;
  forceTabs?: boolean;
  widthTreshold?: number;
  style?: React.CSSProperties;
  route: {
    base: string;
    subs?: string;
    suffix?: string;
  };
}


export const TabbedContainer = (props: TabbedContainerComponentProps) => {
  const viewport = useViewport();
  const navigate = useNavigate();
  const [openTabKey, setOpenTabKey] = useState(props.selectedTab);
  const [forceClose, setForceClose] = useState(false);
  const routeTranslatedTabKey = useParams().tabKey;

  // Otherwise show tabs
  const showAccordion = !!props.widthTreshold
    && viewport.width < props.widthTreshold
    && !props.forceTabs;

  const getUrl = (eventKey: string): string => {
    let url: string;
    if (props.route.subs) {
      url = `${props.route.base}/${t.route(`${props.route.subs}.${eventKey}`)}`;
    } else {
      url = `${props.route.base}/${eventKey}`;
    }
    if (props.route.suffix) {
      url += `/${props.route.suffix}`;
    }
    return url;
  };

  const onTabSelect = (eventKey: string | null) => {
    if (!eventKey) {
      return;
    }

    const url = getUrl(eventKey);
    navigate(url);

    setOpenTabKey(eventKey);
    setForceClose(showAccordion && eventKey === openTabKey && !forceClose);

    if (props.onTabSelect) {
      props.onTabSelect(eventKey);
    }
  };

  const getTabKey = () => {
    // Translate from route
    if (!props.route.subs) {
      return openTabKey;
    }

    if (routeTranslatedTabKey) {
      return t.reverseRoute(props.route.subs, routeTranslatedTabKey);
    }
    return openTabKey;
  };

  const renderTabHeader = (tab: TabKey) => {
    if (!showAccordion) {
      // Tabs
      return (
        <Nav.Item
          title={tab.label ? tab.title : undefined}
          key={tab.key}
          onClick={e => e.preventDefault()}
        >
          <Nav.Link eventKey={tab.key} href={getUrl(tab.key)}>
            {tab.label || tab.title} {tab.headerChildren}
          </Nav.Link>
        </Nav.Item>
      );
    }

    // Accordion
    const header = (
      <div className="clickable" onClick={() => onTabSelect(tab.key)} role="button" tabIndex={0}>
        {tab.title} {tab.headerChildren}
      </div>
    );

    const isOpen = openTabKey === tab.key && !forceClose;
    return (
      <Card className="match-card-panel" key={tab.key}>
        <Card.Header>{header}</Card.Header>
        {isOpen ? props.tabRenderer(tab.key) : null}
      </Card>
    );
  };

  const activeTabKey = getTabKey();
  if (showAccordion) {
    // Accordion
    // TODO: Accordian is not implemented!
    return (
      <CardGroup style={props.style} id={activeTabKey}>
        {props.tabKeys.filter(tab => tab.show !== false).map(tab => renderTabHeader(tab))}
      </CardGroup>
    );
  }

  // Tabs
  return (
    <div style={props.style}>
      <Nav variant="tabs" activeKey={activeTabKey} onSelect={eventKey => onTabSelect(eventKey)}>
        {props.tabKeys.filter(tab => tab.show !== false).map(tab => renderTabHeader(tab))}
      </Nav>
      <div className="match-card-tab">
        {props.tabRenderer(activeTabKey)}
      </div>
    </div>
  );
};
