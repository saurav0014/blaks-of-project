import platformImg from "../../public/Images/platform_png.png"
import image1 from "../../public/Images/light_image.jpeg"
import image2 from "../../public/Images/google_image.jpeg"
import image3 from "../../public/Images/google1_image.jpeg"
export const productData = {
  title: "Products",
  subtitle: "Cutting-edge hardware,",
  description:
    "offerings helping cities optimize resources and achieve smart development goals",

  cardData: [
    {
      id: "1",
      title: "Centralized Control & Monitoring System",
      description:
        "Designed indigenously for street lighting projects, the CCMS offers a complete feeder panel for a group of 30-50 street lights.",
      imageSrc:image1,
    },
    {
      id: "2",
      title: "NEMA-Mounted VOLC 1160",
      description:
        "Designed indigenously for street lighting projects, the CCMS offers a complete feeder panel for a group of 30-50 street lights.",
      imageSrc:image2,
    },
    {
      id: "3",
      title: "Retrofit Street Light Controller VOLC 2160",
      description:
        "Designed indigenously for street lighting projects, the CCMS offers a complete feeder panel for a group of 30-50 street lights.",
      imageSrc:image3,
    },
    {
      id: "4",
      title: "Retrofit Street Light Controller VOLC 2180",
      description:
        "Designed indigenously for street lighting projects, the CCMS offers a complete feeder panel for a group of 30-50 street lights.",
      imageSrc:image1,
    },
    {
      id: "5",
      title: "Retrofit Street Light Controller VOLC 4180",
      description:
        "Designed indigenously for street lighting projects, the CCMS offers a complete feeder panel for a group of 30-50 street lights.",
      imageSrc: image2,
    },
  ],
};

export const platformData = [
  {
    id: 1,
    imageSrc: platformImg,
    altText: "platform-image-1",
    textContent: "Saves on power consumption & related costs",
  },
  {
    id: 2,
    imageSrc: platformImg,
    altText: "platform-image-2",
    textContent: "Lowers downtimes",
  },
  {
    id: 3,
    imageSrc: platformImg,
    altText: "platform-image-3",
    textContent: "Detects power thefts",
  },
  {
    id: 4,
    imageSrc: platformImg,
    altText: "platform-image-4",
    textContent:
      "Ensures smart monitoring and control of the street light infrastructure",
  },
  {
    id: 5,
    imageSrc: platformImg,
    altText: "platform-image-5",
    textContent:
      "Ensures real-time actionable analytics on power failures, lamp malfunctions, voltage failures etc.",
  },
  {
    id: 6,
    imageSrc: platformImg,
    altText: "platform-image-6",
    textContent: "Ensures security in the neighborhood",
  },
];
