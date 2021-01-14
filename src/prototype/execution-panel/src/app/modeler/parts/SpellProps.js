import entryFactory from 'bpmn-js-properties-panel/lib/factory/EntryFactory';

import {
  is
} from 'bpmn-js/lib/util/ModelUtil';


export default function(group, element) {

  // Only return an entry, if the currently selected
  // element is a start event.

  if (is(element, 'bpmn:UserTask') || is(element, 'bpmn:Task') || is(element, 'bpmn:ScriptTask')) {
    group.entries.push(entryFactory.textField({
      id : 'RollbackPoint',
      description : 'input true or false to rollback or not',
      label : 'RollbackPoint',
      modelProperty : 'RollbackPoint'
    }));
    group.entries.push(entryFactory.textField({
      id : 'RollbackOperation',
      description : 'The Operation should be done',
      label : 'RollbackOperation',
      modelProperty : 'RollbackOperation'
    }));
  }

}
