import React, { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import { ArrowIcon, CrossIcon } from '@icons';
import { classes } from './Styles';

interface IDropDownProps {
  width?: number;
  height?: number;
  placeholder?: string;
  valueText?: string;
  selectedCount?: number;
  minWidthContext?: number;
  maxHeightContext?: number;
  onShow?: () => void;
  onReset?: () => void;
  className,
}

type Handler = () => void;
const handlers: Handler[] = [];

window.addEventListener('click', () => {
  handlers.forEach((handler) => {
    handler();
  })
});

const useExpanded = (): [boolean, (value: boolean) => void] => {
  const [expanded, setExpanded] = useState(false);
  const isLocked = useRef(false);

  const setExpandedWrap = (value: boolean) => {
    isLocked.current = true;
    if (expanded !== value) {
      setExpanded(value);
    }
  };

  useEffect(() => {
    const windowClick = () => {
      if (isLocked.current) {
        isLocked.current = false;
      } else {
        setExpanded(false);
      }
    };

    handlers.push(windowClick);

    return () => {
      const index = handlers.indexOf(windowClick);
      handlers.splice(index, 1);
    };
  }, []);

  return [expanded, setExpandedWrap];
};

export const DropDown: React.FC<IDropDownProps> = ({
  width,
  height,
  placeholder,
  valueText,
  selectedCount,
  minWidthContext,
  maxHeightContext,
  onShow,
  onReset,
  className,
  children,
}) => {
  const [expanded, setExpanded] = useExpanded();
  let clicked = false;
  let count = selectedCount || 0;

  const onDropDownClick = () => {
    if (!clicked) {
      setExpanded(!expanded);

      if (!expanded && onShow) {
        onShow();
      }
    }
  };

  const onDropDownContextClick = () => {
    clicked = true;
    setExpanded(true);
  };

  const onResetHandler = () => {
    clicked = true;
    if (onReset) {
      onReset();
    }
  };

  return (
    <div
      className={clsx(classes.dropDown, className)}
      style={{ width, height }}
      tabIndex={1}
      onClick={onDropDownClick} >
      <div className={clsx(classes.content, { [classes.expandedContent]: expanded })}>
        <div className={classes.text}>
          <span>{selectedCount === 1 || !placeholder ? valueText : placeholder}</span>
          {count > 1 ? (<span className={classes.textCount}>{selectedCount}</span>) : null}
        </div>
        <div className={classes.trigger}>
          {count > 0 ? (
            <CrossIcon onClick={onResetHandler} />
          ) : (
            <ArrowIcon className={clsx({ [classes.triggerIconRotate]: expanded })} />
          )}
        </div>
      </div>
      <div
        onClick={onDropDownContextClick}
        className={clsx(classes.context, { [classes.expanded]: expanded })}
        style={{ minWidth: minWidthContext, maxHeight: maxHeightContext }}>
        {children}
      </div>
    </div>
  );
};
