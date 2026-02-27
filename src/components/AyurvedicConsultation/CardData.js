
import img1 from "../../assets/images/img-1.jpg"
import img2 from "../../assets/images/img-2.png"
import img3 from "../../assets/images/img-3.jpg"

export const cardData = [
    {
        row: 1,
        cards: [
            {
                type: "text",
                heading: "स्वस्थस्य स्वास्थ्य रक्षणं, आतुरस्य विकार प्रशमनं ।",
                paragraph: "[ Meaning: The Goal of Ayurveda is to maintain the health of a healthy person and to cure the disease of a diseased person. ]", width: "min-w-[40%]"
            },
            {
                type: "image",
                content: img1,
                width: "min-w-[35%]"
            },
            {
                type: "text",
                heading: "Precise Diagnosis",
                paragraph: "Ayurveda's core principles revolve around Vata, Pitta, and Kapha doshas, guiding you with precise diagnosis and treatment", width: "min-w-[25%]"
            }
        ]

    },
    {
        row: 2,
        cards: [
            {
                type: "text",
                heading: "Zero side-effects",
                paragraph: "Ayurvedic treatments are devoid of chemicals, and are based completely on natural herbs ",
                width: "min-w-[25%]"
            },
            {
                type: "image",
                content: img2,
                width: "min-w-[25%]"
            },

            {
                type: "text",
                heading: "Individual Treatment",
                paragraph: "all Treatments are personalized based on a person's unique constitution and health concerns.",
                width: "min-w-[25%]"
            },

            {
                type: "image",
                content: img3,
                width: "min-w-[25%]"
            }
        ],
        rowStyle: "md:p-[.8rem]"
    }
]