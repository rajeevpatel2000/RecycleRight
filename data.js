// Feature 3: Quiz Data
const quizData = [
    {
        question: "Can you recycle a greasy pizza box?",
        isRecyclable: false,
        feedback: "No! Grease contaminates the paper recycling process. Throw it in the trash or compost if possible."
    },
    {
        question: "Is a plastic water bottle recyclable?",
        isRecyclable: true,
        feedback: "Yes! Most clean plastic bottles (PET #1) are highly recyclable. Just empty them first."
    },
    {
        question: "Should you bag your recyclables in a plastic bag before putting them in the bin?",
        isRecyclable: false,
        feedback: "No! Plastic bags jam recycling machines. Put items in the bin loose."
    },
    {
        question: "Can you recycle aluminum cans?",
        isRecyclable: true,
        feedback: "Yes! Aluminum is infinitely recyclable. It saves 95% of energy vs making new aluminum."
    },
    {
        question: "Are broken drinking glasses recyclable with glass bottles?",
        isRecyclable: false,
        feedback: "No! Drinking glass (cookware, drinking glasses) melts at different temperatures. It must go in the trash."
    },
    {
        question: "Can used batteries go in the regular recycling bin?",
        isRecyclable: false,
        feedback: "Never! Batteries can cause fires. Take them to a special e-waste drop-off."
    }
];

// Feature 4: Search Data (Smart Search)
const searchItems = [
    { name: "Soda Can", category: "Metal", recyclable: true, instruction: "Empty it and recycle." },
    { name: "Milk Jug", category: "Plastic", recyclable: true, instruction: "Rinse and recycle. Labels are usually fine." },
    { name: "Newspaper", category: "Paper", recyclable: true, instruction: "Keep dry and clean." },
    { name: "Pizza Box", category: "Cardboard", recyclable: false, instruction: "Grease ruins it. Trash or compost." },
    { name: "Battery", category: "E-Waste", recyclable: false, instruction: "Do NOT bin. Find local drop-off." },
    { name: "Plastic Bag", category: "Plastic", recyclable: false, instruction: "Take to grocery store drop-off. Don't curb recycle." },
    { name: "Glass Jar", category: "Glass", recyclable: true, instruction: "Rinse out food. Lids often go separate or trash." },
    { name: "Cereal Box", category: "Cardboard", recyclable: true, instruction: "Remove plastic liner. Flatten box." },
    { name: "Styrofoam Cup", category: "Plastic", recyclable: false, instruction: "Most curbside programs don't accept this. Trash." },
    { name: "Magazine", category: "Paper", recyclable: true, instruction: "Recycle with paper." },
    { name: "Phone", category: "E-Waste", recyclable: false, instruction: "Don't trash! Donate or find e-waste recycler." },
    { name: "Tissue / Napkin", category: "Paper", recyclable: false, instruction: "Fibers are too short. Compost or trash." },
    { name: "Yogurt Cup", category: "Plastic", recyclable: true, instruction: "Rinse well. Check if your city takes #5 plastic." },
    { name: "Light Bulb", category: "Glass/Hazardous", recyclable: false, instruction: "Special disposal needed (especially CFLs)." }
];
