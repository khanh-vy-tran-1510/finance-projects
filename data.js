/* Fichier géré par add_project.py */
window.PORTFOLIO = {
  "profile": {
    "name": "Khanh Vy TRAN",
    "title": "Finance quantitative · Gestion des risques · Data",
    "bio": "Passionée par la finance quantitative, je construis des projets personnels autour du risk management, du pricing et de l'analyse de données financières. Chaque projet est documenté : contexte, méthodologie, résultats, limites — et le code est consultable.",
    "email": "khanhvy151002@gmail.com",
    "linkedin": "https://www.linkedin.com/in/khanh-vy-tran-2b87a0239/",
    "github": "https://github.com/khanh-vy-tran-1510",
    "skills": [
      "Python",
      "Pandas / NumPy",
      "Machine Learning",
      "Monte Carlo",
      "VaR / Expected Shortfall",
      "Pricing d'options",
      "Séries temporelles",
      "SQL"
    ],
    "tagline": "Je transforme les données de marché en décisions de risque."
  },
  "categories": [
    "Risk Management",
    "Pricing"
  ],
  "projects": [
    {
      "slug": "krach-cac40",
      "title": "Probabilité de krach à 5 jours : signaux d'alerte précoce (CAC 40)",
      "category": "Risk Management",
      "summary": "Modèles de machine learning exploitant rendements, volatilité et drawdown pour estimer la probabilité de rendements extrêmement négatifs sur les 5 prochains jours de bourse.",
      "tags": [
        "Python",
        "Machine Learning",
        "CAC 40",
        "Volatilité"
      ],
      "date": "2026-10",
      "metrics": []
    },
    {
      "slug": "tve-cac40",
      "title": "Risque de krach boursier : théorie des valeurs extrêmes (CAC 40)",
      "category": "Risk Management",
      "summary": "Modélisation des pertes extrêmes du CAC 40 par la méthode POT et la loi de Pareto généralisée, pour estimer VaR et Expected Shortfall là où les modèles gaussiens sous-estiment le risque.",
      "tags": [
        "Python",
        "EVT",
        "POT",
        "GPD",
        "VaR",
        "Expected Shortfall"
      ],
      "date": "2026-10",
      "metrics": [
        { "label": "VaR 99% EVT", "value": "3,09%" },
        { "label": "ES 99% EVT", "value": "4,83%" },
        { "label": "Forme ξ", "value": "0,32" }
      ]
    }
  ]
};
