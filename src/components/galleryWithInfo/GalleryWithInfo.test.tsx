import React from 'react';
import { render, screen } from "@testing-library/react";
import { GalleryWithInfo, GalleryItem } from "./GalleryWithInfo";

// ✅ Safe mock that avoids accessing out-of-scope variables like React
jest.mock("../../utils/useInView", () => ({
  __esModule: true,
  default: () => [{ current: null }, true], // mock ref + inView = true
}));

const gallery = [
  "https://example.com/image1.webp",
  "https://example.com/image2.webp",
];

const items: GalleryItem[] = [
  {
    imageUrl: "https://example.com/image1.webp",
    eyebrow: "Sport",
    title: "Rugby Power",
    description: "France's top players in action.",
    buttonText: "Learn more",
    buttonLink: "/rugby",
  },
  {
    imageUrl: "https://example.com/image2.webp",
    eyebrow: "Ping Pong",
    title: "Table Tennis Skills",
    description: "Master your serve.",
    buttonText: "Start now",
    buttonLink: "/pingpong",
  },
];

describe("GalleryWithInfo", () => {
  it("renders gallery images", () => {
    render(<GalleryWithInfo gallery={gallery} items={items} />);
    gallery.forEach((_, i) => {
      expect(screen.getByAltText(`gallery-${i}`)).toBeInTheDocument();
    });
  });

  it("renders item titles and descriptions", () => {
    render(<GalleryWithInfo gallery={gallery} items={items} />);
    items.forEach((item) => {
      expect(screen.getByText(item.title)).toBeInTheDocument();
      expect(screen.getByText(item.description)).toBeInTheDocument();
    });
  });

  it("shows buttons when showButton is true", () => {
    render(<GalleryWithInfo gallery={gallery} items={items} showButton={true} />);
    items.forEach((item) => {
      if (item.buttonText) {
        expect(screen.getByText(item.buttonText)).toBeInTheDocument();
      }
    });
  });

  it("hides buttons when showButton is false", () => {
    render(<GalleryWithInfo gallery={gallery} items={items} showButton={false} />);
    items.forEach((item) => {
      if (item.buttonText) {
        expect(screen.queryByText(item.buttonText)).not.toBeInTheDocument();
      }
    });
  });

  it("adds 'inView' class to animated cards", () => {
    const { container } = render(<GalleryWithInfo gallery={gallery} items={items} />);
    const animatedCards = container.querySelectorAll(`.card`);
    animatedCards.forEach((card) => {
      expect(card.className).toMatch(/inView/);
    });
  });
});
