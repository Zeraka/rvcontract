'use strict';

var DemoEntryFactory = require('./implementation/LTL'),
    is = require('bpmn-js/lib/util/ModelUtil').is;

module.exports = function(group, element) {

  if (is(element, 'bpmn:Process')) {

    var options;
    if (is(element, 'bpmn:TextAnnotation')) {
      options = { modelProperty: 'text' };
    }

    group.entries = group.entries.concat(DemoEntryFactory(element, options));

  }

};

