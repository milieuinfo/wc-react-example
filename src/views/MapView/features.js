export const features = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      id: 1,
      geometry: { type: "Point", coordinates: [210000, 190000] },
    },
    {
      type: "Feature",
      id: 2,
      geometry: {
        type: "LineString",
        coordinates: [
          [170000, 170000],
          [150000, 206000],
        ],
      },
    },
    {
      type: "Feature",
      id: 3,
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [44000, 171000],
            [100000, 171000],
            [100000, 205000],
            [44000, 205000],
            [44000, 171000],
          ],
        ],
      },
    },
  ],
};
