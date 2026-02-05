"use strict";

// ===== 設定エリア =====
// あなたのXとInstagramのIDをここに設定してください。
// 例: X_ID = "your_x_id"; （@は付けずにIDのみ）
// 例: INSTAGRAM_ID = "your_insta_id";

const X_ID = "motookachihori";
const INSTAGRAM_ID = "chihori.motooka";

// ===== ここから下は基本的に編集不要です =====

function buildProfileUrl() {
  const urls = {
    x: X_ID ? `https://x.com/${encodeURIComponent(X_ID)}` : null,
    instagram: INSTAGRAM_ID
      ? `https://www.instagram.com/${encodeURIComponent(INSTAGRAM_ID)}`
      : null,
  };

  return urls;
}

function setupLinks() {
  const xLink = document.getElementById("xLink");
  const instagramLink = document.getElementById("instagramLink");

  const { x, instagram } = buildProfileUrl();

  if (x && xLink) {
    xLink.href = x;
    xLink.target = "_blank";
    xLink.rel = "noopener noreferrer";
  } else if (xLink) {
    xLink.classList.add("is-disabled");
    xLink.setAttribute("aria-disabled", "true");
  }

  if (instagram && instagramLink) {
    instagramLink.href = instagram;
    instagramLink.target = "_blank";
    instagramLink.rel = "noopener noreferrer";
  } else if (instagramLink) {
    instagramLink.classList.add("is-disabled");
    instagramLink.setAttribute("aria-disabled", "true");
  }
}

function setupFooterYear() {
  const yearSpan = document.getElementById("copyrightYear");
  if (!yearSpan) return;
  const now = new Date();
  yearSpan.textContent = String(now.getFullYear());
}

document.addEventListener("DOMContentLoaded", () => {
  setupLinks();
  setupFooterYear();
});

