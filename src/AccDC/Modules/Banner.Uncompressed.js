/*!
Accessible Banner Module 2.0 - Minimum requirement: AccDC4X V. 4.2018.0
Copyright 2010-2018 Bryan Garaventa (WhatSock.com)
Part of AccDC, a Cross-Browser JavaScript accessibility API, distributed under the terms of the Open Source Initiative OSI - MIT License
*/

import $A from "../Core/API";

export function loadAccBannerModule() {
  if (!("setBanner" in $A))
    $A.extend({
      setBanner: function(config) {
        config = config || {};
        config.overrides = config.overrides || {};
        config.id = config.overrides.id || $A.genId();

        var options = {
          id: config.id,
          role: "Banner",
          root: config.root || "body",
          prepend: true,
          returnFocus: false,
          autoStart: true,
          widgetType: "AccDCBanner",
          allowCascade: true,
          returnFocus: false,
          exposeHiddenClose: true,
          displayHiddenClose: false,
          runDuring: function(dc) {
            $A.setAttr(dc.outerNode, {
              role: "complementary",
              "aria-label": dc.role
            });
          },
          announce: true,
          click: function(ev, dc) {}
        };

        $A.extend(options, config);

        $A([options], config.overrides, true);

        return config.id;
      }
    });
}

export default loadAccBannerModule();
