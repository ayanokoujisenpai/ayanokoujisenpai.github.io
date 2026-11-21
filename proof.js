"use strict";

const proofContent = document.getElementById("proof-content");
const proofId = new URLSearchParams(window.location.search).get("id");

function addParagraph(text) {
  const paragraph = document.createElement("p");
  paragraph.textContent = text;
  proofContent.append(paragraph);
}

if (typeof REPORTS === "undefined") {
  proofContent.replaceChildren();
  addParagraph("Proof data did not load. Refresh the page and try again.");
} else if (!REPORTS.some((item) => item.hash === proofId)) {
  proofContent.replaceChildren();
  addParagraph("No proof record was found for this link.");
} else {
  const record = REPORTS.find((item) => item.hash === proofId);
  proofContent.replaceChildren();

  const heading = document.createElement("h2");
  heading.textContent =
    record.status === "legit"
      ? "Legitimate service listing"
      : "Reported transaction";
  proofContent.append(heading);

  if (record.status === "legit") {
    addParagraph(`Service: ${record.service}`);
    addParagraph(`Last verified: ${record.updated}`);
  } else {
    addParagraph(`Item or service: ${record.item}`);
    addParagraph(`Amount: ${record.amount}`);
    addParagraph(`Transaction date: ${record.date}`);
    addParagraph(`Last updated: ${record.updated}`);
  }

  if (record.details) addParagraph(record.details);

  const galleryTitle = document.createElement("h2");
  galleryTitle.textContent = "Evidence images";
  proofContent.append(galleryTitle);

  if (record.proofs && record.proofs.length) {
    const gallery = document.createElement("div");
    gallery.className = "proof-gallery";
    record.proofs.forEach((source, index) => {
      const link = document.createElement("a");
      link.href = source;
      link.target = "_blank";
      link.rel = "noopener noreferrer";

      const image = document.createElement("img");
      image.src = source;
      image.alt = `Evidence image ${index + 1}`;
      image.loading = "lazy";
      link.append(image);
      gallery.append(link);
    });
    proofContent.append(gallery);
  } else {
    addParagraph("No images have been added for this record.");
  }

  addParagraph(
    "This page shows submitted records and supporting materials; it is not an independent verification or legal finding.",
  );
}
