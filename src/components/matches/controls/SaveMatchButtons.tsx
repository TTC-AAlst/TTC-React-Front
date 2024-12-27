import React from 'react';
import {CommentButton} from '../../controls/Buttons/CommentButton';
import {Icon} from '../../controls/Icons/Icon';
import {SaveButton} from '../../controls/Buttons/SaveButton';
import {Translator} from '../../../models/model-interfaces';

type SaveMatchButtonsProps = {
  onSave: () => void;
  onBlock: () => void;
  onCommentsToggle: Function;
  t: Translator;
}

export const SaveMatchButtons = ({onSave, onBlock, onCommentsToggle, t}: SaveMatchButtonsProps) => (
  <div className="pull-right" style={{whiteSpace: 'nowrap'}}>
    <CommentButton onClick={() => onCommentsToggle()} style={{marginRight: 5}} />
    <button
      type="button"
      className="btn btn-outline-secondary"
      onClick={onBlock}
      style={{marginRight: 5}}
      title={t('match.plys.tooltipSaveAndBlock')}
    >

      <Icon fa="fa fa-anchor" />
    </button>

    <SaveButton onClick={onSave} title={t('match.plys.tooltipSave')} />
  </div>
);
