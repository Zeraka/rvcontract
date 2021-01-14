declare function require(name: string);

const inherits = require('inherits');

var PropertiesActivator = require('bpmn-js-properties-panel/lib/PropertiesActivator');

// Require all properties you need from existing providers.
// In this case all available bpmn relevant properties without camunda extensions.
var processProps = require('bpmn-js-properties-panel/lib/provider/bpmn/parts/ProcessProps'),
  eventProps = require('bpmn-js-properties-panel/lib/provider/bpmn/parts/EventProps'),
  linkProps = require('bpmn-js-properties-panel/lib/provider/bpmn/parts/LinkProps'),
  documentationProps = require('bpmn-js-properties-panel/lib/provider/bpmn/parts/DocumentationProps'),
  idProps = require('bpmn-js-properties-panel/lib/provider/bpmn/parts/IdProps'),
  nameProps = require('bpmn-js-properties-panel/lib/provider/bpmn/parts/NameProps'),
  sequenceFlowProps = require('bpmn-js-properties-panel/lib/provider/camunda/parts/SequenceFlowProps'),
  scriptTaskProps = require('bpmn-js-properties-panel/lib/provider/camunda/parts/ScriptTaskProps'),
  userTaskProps = require('bpmn-js-properties-panel/lib/provider/camunda/parts/UserTaskProps'),
  serviceTaskDelegateProps = require('bpmn-js-properties-panel/lib/provider/camunda/parts/ServiceTaskDelegateProps'),
  multiInstanceLoopProps = require('bpmn-js-properties-panel/lib/provider/camunda/parts/MultiInstanceLoopProps');

// Require your custom property entries.
var spellProps = require('./parts/SpellProps');
var LTLProps = require('./parts/LTLProps');
var DesignationProps = require('./parts/DesignationProps');




// The general tab contains all bpmn relevant properties.
// The properties are organized in groups.
function createGeneralTabGroups(element: any, bpmnFactory: any, elementRegistry: any) {

  const generalGroup = {
    id: 'general',
    label: 'General',
    entries: new Array,
  };

  idProps(generalGroup, element, elementRegistry);
  nameProps(generalGroup, element);
  processProps(generalGroup, element);
  DesignationProps(generalGroup, element);

  const detailsGroup = {
    id: 'details',
    label: 'Details',
    entries: new Array,
  };
  linkProps(detailsGroup, element);
  eventProps(detailsGroup, element, bpmnFactory, elementRegistry);
  sequenceFlowProps(detailsGroup, element, bpmnFactory, elementRegistry);
  scriptTaskProps(detailsGroup, element, bpmnFactory, elementRegistry);
  userTaskProps(detailsGroup, element, bpmnFactory, elementRegistry);
  serviceTaskDelegateProps(detailsGroup, element, bpmnFactory, elementRegistry);
  multiInstanceLoopProps(detailsGroup, element, bpmnFactory, elementRegistry);

  const documentationGroup = {
    id: 'documentation',
    label: 'Documentation',
    entries: new Array,
  };

  documentationProps(documentationGroup, element, bpmnFactory);

  return [
    generalGroup,
    detailsGroup,
    documentationGroup
  ];
}

// Create the custom magic tab
function createMagicTabGroups(element: any) {

  // Create a group called "Black Magic".
  var blackMagicGroup = {
    id: 'black-magic',
    label: 'Black Magic',
    entries: []
  };

  // Add the spell props to the black magic group.
  spellProps(blackMagicGroup, element);

  return [
    blackMagicGroup
  ];
}
function createLTLTabGroups(element: any) {

  // Create a group called "Black Magic".
  var LTLGroup = {
    id: 'LTL',
    label: 'LTL',
    entries: []
  };


  // Add the spell props to the black magic group.
  LTLProps(LTLGroup, element);

  return [
    LTLGroup
  ];
}



export function CustomPropertiesProvider(eventBus: any, bpmnFactory: any, elementRegistry: any) {

  PropertiesActivator.call(this, eventBus);

  this.getTabs = function (element: any) {

    const generalTab = {
      id: 'general',
      label: 'General',
      groups: createGeneralTabGroups(element, bpmnFactory, elementRegistry)
    };

    // The "magic" tab
    var magicTab = {
      id: 'parameter',
      label: 'Parameter',
      groups: createMagicTabGroups(element)
    };
    var LTLTab = {
      id: 'LTL',
      label: 'LTL',
      groups: createLTLTabGroups(element)
    };

    return [
      generalTab,
      magicTab,
      LTLTab
    ];
  };
}

inherits(CustomPropertiesProvider, PropertiesActivator);
