import entryFactory from 'bpmn-js-properties-panel/lib/factory/EntryFactory';

import {
  is
} from 'bpmn-js/lib/util/ModelUtil';

//在元素的开始元素这里添加
export default function(group, element) {

  //添加的designation,每个元素都有这一栏，意思是注释或者别名，Name一栏只能用英文，
  //使用Designation可以用中文进行注释

  if (element) {
    group.entries.push(entryFactory.textField({
      id : 'Designation',
      description : 'Enter comment alias',
      label : 'designation',
      modelProperty : 'designation'
    }));
  }

}
