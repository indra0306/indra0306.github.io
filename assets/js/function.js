function CircleBar(e) {
    $(e)
      .circleProgress({ fill: { color: "rgb(240, 182, 23)" } })
      .on("circle-animation-progress", function(_event, _progress, stepValue) {
        $(this)
          .find("strong")
          .text(String(parseInt(100 * stepValue)) + "%");
      });
  }
  CircleBar(".round");

