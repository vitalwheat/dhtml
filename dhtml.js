function destinationChanged(dropDownChoice) {
  if (dropDownChoice == "hawaii") {
    document.thumbnail1.src =
      "https://picsum.photos/seed/800/100/150";
    document.thumbnail2.src =
      "https://picsum.photos/seed/801/100/150";
    document.thumbnail3.src =
      "https://picsum.photos/seed/802/100/150";
    document.thumbnail4.src =
      "https://picsum.photos/seed/803/100/150";
    document.thumbnail5.src =
      "https://picsum.photos/seed/804/100/150";
    document.thumbnail6.src =
      "https://picsum.photos/seed/805/100/150";
  }
  if (dropDownChoice == "yosemite") {
    document.thumbnail1.src =
      "https://picsum.photos/seed/700/100/150";
    document.thumbnail2.src =
      "https://picsum.photos/seed/701/100/150";
    document.thumbnail3.src =
      "https://picsum.photos/seed/702/100/150";
    document.thumbnail4.src =
      "https://picsum.photos/seed/703/100/150";
    document.thumbnail5.src =
      "https://picsum.photos/seed/704/100/150";
    document.thumbnail6.src =
      "https://picsum.photos/seed/705/100/150";
  }
  if (dropDownChoice == "lakeTahoe") {
    document.thumbnail1.src =
      "https://picsum.photos/seed/600/100/150";
    document.thumbnail2.src =
      "https://picsum.photos/seed/601/100/150";
    document.thumbnail3.src =
      "https://picsum.photos/seed/602/100/150";
    document.thumbnail4.src =
      "https://picsum.photos/seed/603/100/150";
    document.thumbnail5.src =
      "https://picsum.photos/seed/604/100/150";
    document.thumbnail6.src =
      "https://picsum.photos/seed/605/100/150";
  }
}

function selectLargeImage(imageSource) {
  document.largePic.src = imageSource;
}
