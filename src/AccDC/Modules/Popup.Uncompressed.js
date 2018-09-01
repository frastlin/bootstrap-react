/*!
Accessible Popup Module 2.0 - Minimum requirement: AccDC4X V. 4.2018.0
Copyright 2010-2018 Bryan Garaventa (WhatSock.com)
Part of AccDC, a Cross-Browser JavaScript accessibility API, distributed under the terms of the Open Source Initiative OSI - MIT License
*/

import $A from "../Core/API";

export function loadAccPopupModule() {
  if (!("setPopup" in $A))
    $A.extend({
      setPopup: function(overrides) {
        overrides.overrides = overrides.overrides || {};
        var id = overrides.overrides.id || overrides.id || $A.genId();

        var config = {
          id: id,
          role: "Popup",
          allowCascade: true,
          widgetType: "AccDCPopup",
          autoCloseSameWidget: true,
          forceFocus: true,
          returnFocus: true,
          exposeBounds: true,
          isToggle: true,
          exposeHiddenClose: true,
          displayHiddenClose: true,
          tabOut: function(ev, dc) {
            if (!$A.isTouch() && dc.autoCloseOnTabOut) {
              dc.close();
            }
            return true;
          },
          runAfter: function(dc) {
            $A.setAttr(dc.triggerObj, {
              "aria-expanded": "true",
              "aria-controls": dc.outerNodeId
            });
          },
          runBeforeClose: function(dc) {
            $A.setAttr(dc.triggerObj, {
              "aria-expanded": "false",
              "aria-controls": ""
            });
          },
          runBeforeDestroy: function(dc) {
            $A.off("body", ".AccDCPopup");
          },
          keyDown: function(ev, dc) {
            var k = ev.which || ev.keyCode;

            // If Escape is pressed, close the popup
            if (k === 27) {
              dc.close();
              ev.stopPropagation();
              ev.preventDefault();
            }
          },
          click: function(ev, dc) {},
          onCreated: function(dc) {
            if (dc.trigger) {
              $A.setAttr(dc.trigger, "aria-expanded", "false");
            }
            id = dc.id;
          }
        };

        $A.extend(config, overrides);

        $A([config], overrides.overrides || {});

        // Return the new popup AccDC Object ID
        return id;
      }
    });
}

export default loadAccPopupModule();
