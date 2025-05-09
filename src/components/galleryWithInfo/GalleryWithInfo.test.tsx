import React from "react";
import { render, screen } from "@testing-library/react";
import { GalleryWithInfo, GalleryItem } from "./GalleryWithInfo";

const gallery = [
    "https://example.com/image1.webp",
    "https://example.com/image2.webp"
];

const items: GalleryItem[] = [
    {
        imageUrl: "https://example.com/image1.webp",
        eyebrow: "Sport",
        title: "Rugby Power",
        description: "France's top players in action.",
        buttonText: "Learn more",
        buttonLink: "/rugby"
    },
    {
        imageUrl: "https://example.com/image2.webp",
        eyebrow: "Ping Pong",
        title: "Table Tennis Skills",
        description: "Master your serve.",
        buttonText: "Start now",
        buttonLink: "/pingpong"
    }
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
});
