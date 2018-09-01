/*!
Accessible Footnotes Module 3.0 - Minimum requirement: AccDC4X V. 4.2018.0
Copyright 2010-2018 Bryan Garaventa (WhatSock.com)
Part of AccDC, a Cross-Browser JavaScript accessibility API, distributed under the terms of the Open Source Initiative OSI - MIT License
*/

import $A from "../Core/API";

export function loadAccFootnoteModule() {
  if (!("setFootnotes" in $A))
    $A.extend({
      setFootnotes: function(overrides) {
        if (!$A.setFootnotes.base) {
          $A.setFootnotes.base = $A.genId();
          $A.setFootnotes[$A.setFootnotes.base] = {};
          $A.setFootnotes[$A.setFootnotes.base + "a"] = {};
        }

        var base = $A.setFootnotes.base,
          config = overrides || {},
          selector = config.selector || "",
          context = config.context || document,
          fnChar = config.fnChar || "&#8224;",
          fnText = config.fnText || "Footnote",
          backText = config.backText || "Back to Footnote",
          pair = {};

        $A.query(selector, context, function(i, o) {
          var fnId = $A.getAttr(o, "data-footnote");

          if (!pair[fnId])
            pair[fnId] = {
              fns: [],
              last: 0,
              name: $A.getText(o),
              targ: $A.getEl(fnId)
            };

          if (
            $A.setFootnotes[base][base + fnId + i] &&
            $A.setFootnotes[base][base + fnId + i].nodeType === 1 &&
            $A.setFootnotes[base][base + fnId + i].parentNode
          ) {
            $A.remove($A.setFootnotes[base][base + fnId + i]);
            delete $A.setFootnotes[base][base + fnId + i];
            $A.data(o, "BoundFootnote", false);
          }

          if (
            $A.setFootnotes[base + "a"][base + fnId + i] &&
            $A.setFootnotes[base + "a"][base + fnId + i].nodeType === 1 &&
            $A.setFootnotes[base + "a"][base + fnId + i].parentNode
          ) {
            $A.remove($A.setFootnotes[base + "a"][base + fnId + i]);
            delete $A.setFootnotes[base + "a"][base + fnId + i];
          }

          if (!$A.data(o, "BoundFootnote")) {
            $A.data(o, "BoundFootnote", true);

            var a = $A.createEl("a", {
              id: base + fnId + i,
              href: "#",
              title: $A.getText(o),
              "aria-label": fnText + (i + 1)
            });
            $A.insert('<sup aria-hidden="true">[' + (i + 1) + "]</sup>", a);
            $A.setFootnotes[base][base + fnId + i] = a;
            pair[fnId].fns.push(a);
            $A.append(a, o);

            $A.on(a, "click", function(ev) {
              pair[fnId].last = $A.inArray(this, pair[fnId].fns);
              pair[fnId].fn.focus();
              ev.stopPropagation();
              ev.preventDefault();
            });

            if (!pair[fnId].fn) {
              var a2 = $A.createEl("a", {
                href: "#",
                title: backText + " " + pair[fnId].name,
                "aria-label": backText + " " + pair[fnId].name
              });
              $A.insert('<span aria-hidden="true">' + fnChar + "</span>", a2);
              $A.setFootnotes[base + "a"][base + fnId + i] = a2;
              pair[fnId].fn = a2;
              $A.append(a2, pair[fnId].targ);

              $A.on(a2, "click", function(ev) {
                pair[fnId].fns[pair[fnId].last].focus();
                ev.stopPropagation();
                ev.preventDefault();
              });
            }
          }
        });
      }
    });
}

export default loadAccFootnoteModule();
