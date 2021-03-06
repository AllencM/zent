const helper = {
  getCalculatedWidth(width) {
    let res;
    if (typeof width === 'number') {
      res = `${width}%`;
    } else if (typeof width === 'string') {
      res = width;
    }

    return res;
  },

  isReactComponent(render) {
    let isReact = false;

    if (typeof render === 'function') {
      if (render.prototype && render.prototype.isReactComponent) {
        isReact = true;
      }
    }

    return isReact;
  },

  getAlignClass(textAlign) {
    let alignValue = '';

    if (textAlign) {
      switch (textAlign) {
        case 'left':
          alignValue = 'start';
          break;
        case 'right':
          alignValue = 'end';
          break;
        case 'center':
          alignValue = 'center';
          break;
        default:
          alignValue = 'start';
      }
    }

    return alignValue;
  },

  // return true/false/null
  needFixBatchComps(isTableInView, isFootInView, isSelectRows, isFixed) {
    let res = null;
    if (isTableInView && !isFootInView && isSelectRows) {
      if (!isFixed) {
        res = true;
      }
    } else if (isFixed) {
      res = false;
    }

    return res;
  }
};

export default helper;
