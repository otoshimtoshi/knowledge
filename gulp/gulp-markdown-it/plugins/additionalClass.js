module.exports = function additionalClass(md) {

  /**
   * Example
   * [link text](https://github.com/otoshimtoshi/knowledge)
   * 
   * Output
   * <a href="https://github.com/otoshimtoshi/knowledge" class="markdown-body">
   * link text
   * </a>
   */
  const originalLink_open = md.renderer.rules.link_open ||
    function (tokens, idx, options, env, self) {
      return self.renderToken(tokens, idx, options);
  };
  
  md.renderer.rules.link_open = function (tokens, idx, options, env, self) {
    var aIndex = tokens[idx].attrIndex('target');
  
    if (aIndex < 0) {
      tokens[idx].attrPush(['class', 'markdown-body']);
    } else {
      tokens[idx].attrs[aIndex][1] = 'markdown-body';
    }
  
    return originalLink_open(tokens, idx, options, env, self);
  };

  /**
   * Example
   * Example
   * 
   * Output
   * <p class="markdown-body">
   * Example
   * </p>
   */
  const originalParagraph_open = md.renderer.rules.paragraph_open ||
    function (tokens, idx, options, env, self) {
      return self.renderToken(tokens, idx, options);
  };
  
  md.renderer.rules.paragraph_open = function (tokens, idx, options, env, self) {
    var aIndex = tokens[idx].attrIndex('target');
  
    if (aIndex < 0) {
      tokens[idx].attrPush(['class', 'markdown-body']);
    } else {
      tokens[idx].attrs[aIndex][1] = 'markdown-body';
    }
  
    return originalParagraph_open(tokens, idx, options, env, self);
  };

  /**
   * Example
   * #Example
   * 
   * Output
   * <h1 class="markdown-body">
   * Example
   * </h1>
   */
  const originalHeading_open = md.renderer.rules.heading_open ||
    function (tokens, idx, options, env, self) {
      return self.renderToken(tokens, idx, options);
  };
  
  md.renderer.rules.heading_open = function (tokens, idx, options, env, self) {
    var aIndex = tokens[idx].attrIndex('target');
  
    if (aIndex < 0) {
      tokens[idx].attrPush(['class', 'markdown-body']);
    } else {
      tokens[idx].attrs[aIndex][1] = 'markdown-body';
    }
  
    return originalHeading_open(tokens, idx, options, env, self);
  };

  /**
   * Example
   * ***
   * 
   * Output
   * <hr class="markdown-body"></hr>
   */
  const originalHr = md.renderer.rules.hr ||
    function (tokens, idx, options, env, self) {
      return self.renderToken(tokens, idx, options);
  };
  
  md.renderer.rules.hr = function (tokens, idx, options, env, self) {
    var aIndex = tokens[idx].attrIndex('target');
  
    if (aIndex < 0) {
      tokens[idx].attrPush(['class', 'markdown-body']);
    } else {
      tokens[idx].attrs[aIndex][1] = 'markdown-body';
    }
  
    return originalHr(tokens, idx, options, env, self);
  };

  /**
   * Example
   *  + List
   *  1. List
   * 
   * Output
   * <ul>
   *  <li class="markdown-body">List</li>
   * </ul>
   * <ol>
   *  <li class="markdown-body">List</li>
   * </ol>
   */
  const originalList_item_open = md.renderer.rules.list_item_open ||
    function (tokens, idx, options, env, self) {
      return self.renderToken(tokens, idx, options);
  };
  
  md.renderer.rules.list_item_open = function (tokens, idx, options, env, self) {
    var aIndex = tokens[idx].attrIndex('target');
  
    if (aIndex < 0) {
      tokens[idx].attrPush(['class', 'markdown-body']);
    } else {
      tokens[idx].attrs[aIndex][1] = 'markdown-body';
    }
  
    return originalList_item_open(tokens, idx, options, env, self);
  };
  
  /**
   * Example
   *  1. List
   * 
   * Output
   * <ol class="markdown-body">
   *  <li>List</li>
   * </ol>
   */
  const originalOrdered_list_open = md.renderer.rules.ordered_list_open ||
    function (tokens, idx, options, env, self) {
      return self.renderToken(tokens, idx, options);
  };
  
  md.renderer.rules.ordered_list_open = function (tokens, idx, options, env, self) {
    var aIndex = tokens[idx].attrIndex('target');
  
    if (aIndex < 0) {
      tokens[idx].attrPush(['class', 'markdown-body']);
    } else {
      tokens[idx].attrs[aIndex][1] = 'markdown-body';
    }
  
    return originalOrdered_list_open(tokens, idx, options, env, self);
  };

  /**
   * Example
   *  + List
   * 
   * Output
   * <ul class="markdown-body">
   *  <li>List</li>
   * </ul>
   */
  const originalBullet_list_open = md.renderer.rules.bullet_list_open ||
    function (tokens, idx, options, env, self) {
      return self.renderToken(tokens, idx, options);
  };
  
  md.renderer.rules.bullet_list_open = function (tokens, idx, options, env, self) {
    var aIndex = tokens[idx].attrIndex('target');
  
    if (aIndex < 0) {
      tokens[idx].attrPush(['class', 'markdown-body']);
    } else {
      tokens[idx].attrs[aIndex][1] = 'markdown-body';
    }
  
    return originalBullet_list_open(tokens, idx, options, env, self);
  };

  /**
   * Example
   * > Blockquotes
   * 
   * Output
   * <blockquote class="markdown-body">
   *  <p>Blockquotes</p>
   * </blockquote>
   */
  const originalBlockquote_open = md.renderer.rules.blockquote_open ||
    function (tokens, idx, options, env, self) {
      return self.renderToken(tokens, idx, options);
  };
  
  md.renderer.rules.blockquote_open = function (tokens, idx, options, env, self) {
    var aIndex = tokens[idx].attrIndex('target');
  
    if (aIndex < 0) {
      tokens[idx].attrPush(['class', 'markdown-body']);
    } else {
      tokens[idx].attrs[aIndex][1] = 'markdown-body';
    }
  
    return originalBlockquote_open(tokens, idx, options, env, self);
  };

  /**
   * Code block (4 spaces padded)
   * Example
   *     // code
   *     code
   * 
   * Output
   * <pre class="markdown-body">
   *  <code>// code
   *    code
   *  </code>
   * </pre>
   */
  const originalCode_block = md.renderer.rules.code_block ||
    function (tokens, idx, options, env, self) {
      return self.renderToken(tokens, idx, options);
  };
  
  md.renderer.rules.code_block = function (tokens, idx, options, env, self) {
    var aIndex = tokens[idx].attrIndex('target');
  
    if (aIndex < 0) {
      tokens[idx].attrPush(['class', 'markdown-body']);
    } else {
      tokens[idx].attrs[aIndex][1] = 'markdown-body';
    }
  
    return originalCode_block(tokens, idx, options, env, self);
  };

  /**
   * Example
   * ``` javascript
   * Scode
   * ```
   * 
   * Output
   * <pre>
   *  <code class="markdown-body javascript">
   *    code
   *  </code>
   * </pre>
   */
  const originalFence = md.renderer.rules.fence ||
    function (tokens, idx, options, env, self) {
      return self.renderToken(tokens, idx, options);
  };
  
  md.renderer.rules.fence = function (tokens, idx, options, env, self) {
    var aIndex = tokens[idx].attrIndex('target');
  
    if (aIndex < 0) {
      tokens[idx].attrPush(['class', 'markdown-body']);
    } else {
      tokens[idx].attrs[aIndex][1] = 'markdown-body';
    }
  
    return originalFence(tokens, idx, options, env, self);
  };

  /**
   * Example
   * | Option | Description |
   * | ------ | ----------- |
   * | data   | path to dat |
   * | engine | engine to b |
   * | ext    | extension to|
   * 
   * Output
   * <table class="markdown-body">
   */
  const originalTable_open = md.renderer.rules.table_open ||
    function (tokens, idx, options, env, self) {
      return self.renderToken(tokens, idx, options);
  };
  
  md.renderer.rules.table_open = function (tokens, idx, options, env, self) {
    var aIndex = tokens[idx].attrIndex('target');
  
    if (aIndex < 0) {
      tokens[idx].attrPush(['class', 'markdown-body']);
    } else {
      tokens[idx].attrs[aIndex][1] = 'markdown-body';
    }
  
    return originalTable_open(tokens, idx, options, env, self);
  };

  /**
   * Example
   * | Option | Description |
   * | ------ | ----------- |
   * | data   | path to dat |
   * | engine | engine to b |
   * | ext    | extension to|
   * 
   * Output
   * <thead class="markdown-body">
   */
  const originalThead_open = md.renderer.rules.thead_open ||
    function (tokens, idx, options, env, self) {
      return self.renderToken(tokens, idx, options);
  };
  
  md.renderer.rules.thead_open = function (tokens, idx, options, env, self) {
    var aIndex = tokens[idx].attrIndex('target');
  
    if (aIndex < 0) {
      tokens[idx].attrPush(['class', 'markdown-body']);
    } else {
      tokens[idx].attrs[aIndex][1] = 'markdown-body';
    }
  
    return originalThead_open(tokens, idx, options, env, self);
  };

  /**
   * Example
   * | Option | Description |
   * | ------ | ----------- |
   * | data   | path to dat |
   * | engine | engine to b |
   * | ext    | extension to|
   * 
   * Output
   * <tbody class="markdown-body">
   */
  const originalTbody_open = md.renderer.rules.tbody_open ||
    function (tokens, idx, options, env, self) {
      return self.renderToken(tokens, idx, options);
  };
  
  md.renderer.rules.tbody_open = function (tokens, idx, options, env, self) {
    var aIndex = tokens[idx].attrIndex('target');
  
    if (aIndex < 0) {
      tokens[idx].attrPush(['class', 'markdown-body']);
    } else {
      tokens[idx].attrs[aIndex][1] = 'markdown-body';
    }
  
    return originalTbody_open(tokens, idx, options, env, self);
  };

  /**
   * Example
   * | Option | Description |
   * | ------ | ----------- |
   * | data   | path to dat |
   * | engine | engine to b |
   * | ext    | extension to|
   * 
   * Output
   * <tr class="markdown-body">
   */
  const originalTr_open = md.renderer.rules.tr_open ||
    function (tokens, idx, options, env, self) {
      return self.renderToken(tokens, idx, options);
  };
  
  md.renderer.rules.tr_open = function (tokens, idx, options, env, self) {
    var aIndex = tokens[idx].attrIndex('target');
  
    if (aIndex < 0) {
      tokens[idx].attrPush(['class', 'markdown-body']);
    } else {
      tokens[idx].attrs[aIndex][1] = 'markdown-body';
    }
  
    return originalTr_open(tokens, idx, options, env, self);
  };

  /**
   * Example
   * | Option | Description |
   * | ------ | ----------- |
   * | data   | path to dat |
   * | engine | engine to b |
   * | ext    | extension to|
   * 
   * Output
   * <th class="markdown-body">
   */
  const originalTh_open = md.renderer.rules.th_open ||
    function (tokens, idx, options, env, self) {
      return self.renderToken(tokens, idx, options);
  };
  
  md.renderer.rules.th_open = function (tokens, idx, options, env, self) {
    var aIndex = tokens[idx].attrIndex('target');
  
    if (aIndex < 0) {
      tokens[idx].attrPush(['class', 'markdown-body']);
    } else {
      tokens[idx].attrs[aIndex][1] = 'markdown-body';
    }
  
    return originalTh_open(tokens, idx, options, env, self);
  };

  /**
   * Example
   * | Option | Description |
   * | ------ | ----------- |
   * | data   | path to dat |
   * | engine | engine to b |
   * | ext    | extension to|
   * 
   * Output
   * <td class="markdown-body">
   */
  const originalTd_open = md.renderer.rules.td_open ||
    function (tokens, idx, options, env, self) {
      return self.renderToken(tokens, idx, options);
  };
  
  md.renderer.rules.td_open = function (tokens, idx, options, env, self) {
    var aIndex = tokens[idx].attrIndex('target');
  
    if (aIndex < 0) {
      tokens[idx].attrPush(['class', 'markdown-body']);
    } else {
      tokens[idx].attrs[aIndex][1] = 'markdown-body';
    }
  
    return originalTd_open(tokens, idx, options, env, self);
  };
}