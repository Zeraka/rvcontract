import entryFactory from 'bpmn-js-properties-panel/lib/factory/EntryFactory';

import {
  is
} from 'bpmn-js/lib/util/ModelUtil';

//在元素的开始元素这里添加
export default function(group, element) {

  // Only return an entry, if the currently selected
  // element is a start event.

  if (is(element, 'bpmn:Process')) {
    group.entries.push(entryFactory.textField({
      id : 'LTL',
      description : 'input LTL expression',
      label : 'LTL',
      modelProperty : 'LTL'
    }));
  }

}
