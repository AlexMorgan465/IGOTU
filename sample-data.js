// sample-data.js - VERSION BOOSTÉE COMPLÈTE
const sampleData = {
    "Categories": {
        // ==================== CATÉGORIES PRINCIPALES ====================
        "Conversations": {
            "name": "Conversations informelles",
            "description": "Salutations et conversations courantes avec l'assistant",
            "subCategories": {
                "Greetings": "Salutations standard",
                "Casual": "Conversations décontractées",
                "Farewell": "Au revoir et remerciements",
                "Help": "Demandes d'aide",
                "Identity": "Questions sur l'identité"
            }
        },
        
        "PDFAccessibility": {
            "name": "Accessibilité PDF",
            "description": "Questions pédagogiques sur l'accessibilité des documents PDF",
            "subCategories": {
                "Fundamentals": "Fondamentaux et principes généraux",
                "Standards": "Normes et référentiels",
                "AssistiveTech": "Technologies d'assistance",
                "Structure": "Structure et balisage PDF",
                "Elements": "Éléments spécifiques",
                "Tables": "Tableaux accessibles",
                "Forms": "Formulaires accessibles",
                "Images": "Images et graphiques",
                "Navigation": "Navigation et liens",
                "Validation": "Contrôle et validation",
                "Remediation": "Traitement et remédiation",
                "Tools": "Outils et logiciels",
                "BestPractices": "Bonnes pratiques",
                "Advanced": "Concepts avancés"
            }
        },
        
        "ProfessionalProfiles": {
            "name": "Profils professionnels",
            "description": "Informations sur les dirigeants et entreprises",
            "subCategories": {
                "AnelloIannuzzi": "M. Anello Iannuzzi",
                "OlfaKaramosly": "Mme Olfa Karamosly",
                "EIDS": "Entreprise EIDS",
                "EuroTeleServices": "Euro Tele Services",
                "BusinessContext": "Contexte professionnel"
            }
        },
        
        "Technical": {
            "name": "Technique et Support",
            "description": "Questions techniques et support",
            "subCategories": {
                "Software": "Logiciels et outils",
                "Troubleshooting": "Dépannage",
                "Integration": "Intégration et API",
                "Performance": "Performance et optimisation"
            }
        }
    },

    "DataSet": {
        // ==================== CONVERSATIONS ====================
        "Conversations": {
            "Greetings": [
                ["bonjour", "👋 Bonjour ! Je suis Pixels, votre assistant spécialisé en accessibilité PDF et informations professionnelles.\n\n📄 Je peux répondre sur :\n• Accessibilité PDF (concepts pédagogiques)\n• M.Anello Iannuzzi et ses sociétés\n• Mme.Olfa Karamosly chez EIDS\n\nComment puis-je vous aider ?"],
                ["hello", "👋 Hello ! Je suis votre assistant intelligent.\n\nPosez-moi vos questions sur :\n• L'accessibilité PDF (approche structurée)\n• Les profils professionnels\n• Les normes d'accessibilité numérique"],
                ["salut", "👋 Salut ! Bienvenue dans l'assistant Pixels.\n\nEssayer :\n• \"Pourquoi l'accessibilité numérique est importante ?\"\n• \"Qui est M.Anello Iannuzzi ?\"\n• \"Qu'est-ce que PDF/UA ?\""],
                ["bon matin", "🌞 Bon matin ! Excellente journée pour apprendre sur l'accessibilité PDF. Que puis-je faire pour vous aujourd'hui ?"],
                ["bon après-midi", "🌤️ Bon après-midi ! Comment puis-je vous assister sur l'accessibilité PDF ou les infos pros ?"],
                ["bonsoir", "🌙 Bonsoir ! Même le soir, je suis là pour répondre à vos questions sur le balisage PDF et les infos professionnelles."],
                ["bonne nuit", "🌃 Bonne nuit ! Je serai là demain pour vous aider avec vos questions sur l'accessibilité PDF. Reposez-vous bien !"],
                ["salutations", "👋 Salutations ! Pixels à votre service. Quel sujet vous intéresse aujourd'hui ?"],
                ["greetings", "👋 Greetings ! I am Pixels, your PDF accessibility assistant. How can I help you today?"],
                ["hola", "🇪🇸 ¡Hola! Soy Pixels, tu asistente de accesibilidad PDF. ¿En qué puedo ayudarte hoy?"],
                ["ciao", "🇮🇹 Ciao ! Sono Pixels, il tuo assistente per l'accessibilità PDF. Come posso aiutarti oggi?"],
                ["guten tag", "🇩🇪 Guten Tag ! Ich bin Pixels, Ihr PDF-Barrierefreiheits-Assistent. Wie kann ich Ihnen heute helfen?"]
            ],
            
            "Casual": [
                ["hey", "👋 Hey ! Je suis Pixels, ton assistant en accessibilité PDF. Prêt à répondre à tes questions sur le balisage PDF ou les infos pros !"],
                ["yo", "😎 Yo ! C'est Pixels à l'appareil. Tu cherches des infos sur les PDF accessibles, M.Anello Iannuzzi ou Mme.Olfa Karamosly ?"],
                ["coucou", "👋 Coucou ! Bienvenue dans l'assistant Pixels. Je peux t'aider avec :\n• Le balisage PDF\n• Les infos sur M.Anello Iannuzzi\n• Tout sur Mme.Olfa Karamosly et EIDS"],
                ["hey pixel", "🤖 Hey ! Pixels présent et prêt. Demande-moi n'importe quoi sur :\n✅ Accessibilité PDF (concepts pédagogiques)\n✅ M.Anello Iannuzzi\n✅ Mme.Olfa Karamosly\n✅ Normes et bonnes pratiques"],
                ["salut l'ami", "👋 Salut l'ami ! Content de te voir. Je suis ton pote Pixels, spécialiste PDF et infos pros. Comment puis-je t'aider ?"],
                ["hello there", "🌟 Hello there ! Pixels à ton service. Je parle français et accessibilité PDF. Quelle est ta question ?"],
                ["wesh", "😄 Wesh ! Pixels dans la place. Tu veux des infos sur l'accessibilité PDF ou sur les dirigeants d'entreprise ?"],
                ["ça gaze", "🔥 Ça gaze ! Tout roule de mon côté. Et toi, tu as besoin d'infos sur l'accessibilité PDF ou les pros ?"],
                ["cava", "😊 Je vais très bien, merci ! Prêt à répondre à vos questions."],
                ["comment ça va", "✨ Tout va bien, merci ! Je suis là pour vous aider."],
                ["comment vas-tu", "😊 Je vais super bien, merci ! Toujours motivé pour aider avec l'accessibilité PDF. Et toi, tu as une question précise ?"],
                ["tu vas bien", "🌟 Très bien, merci ! Toujours prêt à discuter accessibilité PDF. Et toi, comment vas-tu ?"],
                ["quoi de neuf", "🚀 Quoi de neuf ? De mon côté, je suis prêt à répondre à toutes tes questions sur :\n• Accessibilité PDF (concepts clés)\n• M.Anello Iannuzzi\n• Mme.Olfa Karamosly\n• Normes d'accessibilité"],
                ["quoi de beau", "🌻 Quoi de beau aujourd'hui ? Moi, je suis prêt à discuter accessibilité PDF ou profils pros. Et toi ?"],
                ["des nouvelles", "📰 Des nouvelles ? J'ai plein d'infos sur l'accessibilité PDF et les entreprises. Qu'est-ce qui t'intéresse ?"],
                ["ça roule", "🛵 Ça roule ! De mon côté, tout est prêt pour t'aider avec l'accessibilité PDF. Et chez toi ?"],
                ["comment ça se passe", "🔄 Comment ça se passe ? De mon côté, je suis opérationnel pour tes questions sur le balisage PDF !"],
                ["tranquille", "😌 Tranquille. Je suis là, tranquille, prêt à répondre à tes questions sur l'accessibilité PDF."],
                ["ça boume", "🎉 Ça boume ! Toujours motivé pour parler accessibilité PDF. Et toi, tu travailles sur quoi ?"],
                ["what's up", "👋 What's up? I'm Pixels, ready to discuss PDF accessibility or professional profiles. What's on your mind?"],
                ["how are you", "😊 I'm doing great, thanks! Ready to help with PDF accessibility. How about you?"],
                ["how's it going", "👍 It's going well! I'm here to help with any PDF accessibility questions you might have."]
            ],
            
            "Farewell": [
                ["merci", "🙏 De rien ! C'était un plaisir de t'aider. N'hésite pas si tu as d'autres questions sur l'accessibilité PDF, M.Anello Iannuzzi ou autre chose !"],
                ["merci beaucoup", "💖 Merci beaucoup à toi ! Ravie d'avoir pu t'aider. Reviens quand tu veux pour plus d'infos sur l'accessibilité PDF ou les profils pros !"],
                ["merci bien", "🙂 Merci bien ! N'hésite pas à revenir pour plus d'infos sur le balisage PDF."],
                ["c'est gentil", "😊 C'est gentil de ta part ! Content d'avoir pu t'aider. À bientôt !"],
                ["thanks", "👍 You're welcome ! Happy to help with PDF accessibility or professional info. Don't hesitate to ask more!"],
                ["thank you", "🙏 Thank you! It was a pleasure to assist you. Come back anytime for more PDF accessibility tips!"],
                ["gracias", "🇪🇸 ¡De nada! Fue un placer ayudarte. ¡Vuelve cuando quieras!"],
                ["danke", "🇩🇪 Bitte sehr! Gerne wieder. Komm zurück, wenn du mehr über PDF-Barrierefreiheit wissen möchtest!"],
                ["grazie", "🇮🇹 Prego! È stato un piacere aiutarti. Torna presto!"],
                ["ok", "👌 OK ! Si tu as d'autres questions plus tard, je suis là. N'oublie pas : je connais bien les concepts d'accessibilité PDF et les infos sur M.Anello Iannuzzi !"],
                ["d'accord", "✅ D'accord ! Au cas où : je suis expert en accessibilité PDF (concepts clés) et infos sur les dirigeants d'EIDS. À bientôt !"],
                ["entendu", "👂 Entendu ! Je reste à disposition pour tes futures questions sur l'accessibilité PDF."],
                ["compris", "✓ Compris ! N'hésite pas si tu as besoin de plus d'explications sur le balisage PDF."],
                ["ça marche", "👍 Ça marche ! À la prochaine fois pour plus de conseils PDF."],
                ["parfait", "✨ Parfait ! Content d'avoir pu t'éclairer. Reviens quand tu veux !"],
                ["a plus", "👋 À plus ! Passe une bonne journée. Reviens pour plus de conseils sur l'accessibilité PDF !"],
                ["à plus tard", "⌚ À plus tard ! Bonne continuation avec tes projets d'accessibilité."],
                ["à bientôt", "🔜 À bientôt ! N'oublie pas que je suis spécialisé en accessibilité PDF et infos pros."],
                ["à la prochaine", "🔄 À la prochaine ! Ce fut un plaisir de discuter avec toi."],
                ["bye", "😊 Bye ! Bonne continuation. Rappelle : je sais tout sur l'accessibilité PDF et M.Anello Iannuzzi !"],
                ["au revoir", "🌟 Au revoir ! Ce fut un plaisir de t'assister. Pour rappel, je suis spécialisé en accessibilité PDF et infos professionnelles."],
                ["goodbye", "👋 Goodbye! Have a great day and remember I'm here for PDF accessibility questions!"],
                ["ciao", "🇮🇹 Ciao ! À la prochaine. N'oublie pas que je peux t'aider avec l'accessibilité PDF et les infos sur EIDS !"],
                ["adieu", "👋 Adieu ! Passe une excellente journée. Reviens pour plus d'infos sur l'accessibilité."],
                ["take care", "🤗 Take care! Don't hesitate to return if you have more PDF accessibility questions!"],
                ["bonne journée", "🌞 Bonne journée ! Merci pour cette conversation. À très bientôt !"],
                ["bonne soirée", "🌙 Bonne soirée ! Repose-toi bien et à demain peut-être."],
                ["bonne nuit", "🌃 Bonne nuit ! Fais de beaux rêves... de PDF accessibles !"],
                ["à demain", "📅 À demain ! Je serai là pour tes prochaines questions sur l'accessibilité PDF."],
                ["à tout à l'heure", "⏰ À tout à l'heure ! Je reste connecté pour tes questions."],
                ["je te laisse", "👤 Je te laisse alors ! N'hésite pas à revenir si besoin."],
                ["je dois y aller", "🚶 Je dois y aller ? D'accord, à bientôt alors ! Bonne continuation."],
                ["faut que je parte", "🏃 Faut que tu partes ? Pas de problème, à la prochaine !"]
            ],
            
            "Help": [
                ["aide", "🆘 Besoin d'aide ? Je suis là pour ça !\n\nPose-moi une question sur :\n• L'accessibilité PDF\n• M.Anello Iannuzzi\n• Mme.Olfa Karamosly\n• Ou demande \"que peux-tu faire ?\" pour plus d'options"],
                ["help", "🆘 Help? I'm here for you! Ask me about:\n• PDF accessibility\n• Professional profiles\n• Accessibility standards\nOr type \"what can you do?\" for more options"],
                ["que peux-tu faire", "🎯 Je peux :\n• Expliquer les concepts d'accessibilité PDF\n• Donner des infos sur M.Anello Iannuzzi et ses sociétés\n• Parler de Mme.Olfa Karamosly\n• Expliquer les normes WCAG, PDF/UA, RGAA\n• Donner des conseils pratiques de balisage\n• Répondre à tes questions techniques"],
                ["what can you do", "🎯 I can:\n• Explain PDF accessibility concepts\n• Provide info about M.Anello Iannuzzi and his companies\n• Talk about Mme.Olfa Karamosly\n• Explain WCAG, PDF/UA, RGAA standards\n• Give practical tagging advice\n• Answer your technical questions"],
                ["que sais-tu faire", "💡 Je sais :\n• Répondre aux questions pédagogiques sur l'accessibilité\n• Donner des informations professionnelles précises\n• Expliquer des concepts techniques complexes simplement\n• Aider avec des problèmes pratiques de balisage PDF\n• Orienter vers les bonnes ressources"],
                ["tu m'aides", "🤝 Bien sûr que je t'aide ! C'est mon rôle. Dis-moi simplement ce que tu cherches :\n• Une explication sur l'accessibilité PDF ?\n• Des infos sur un dirigeant d'entreprise ?\n• Des conseils techniques ?"],
                ["j'ai besoin d'aide", "🤲 J'ai besoin d'aide ? Je suis là pour toi ! Quel est ton problème ?\n• Tu comprends pas un concept d'accessibilité ?\n• Tu cherches une information spécifique ?\n• Tu as un problème technique avec un PDF ?"],
                ["je ne comprends pas", "🧠 Je ne comprends pas ? Pas de problème, je vais t'expliquer différemment. Dis-moi ce qui te pose problème :\n• Un terme technique ?\n• Une norme particulière ?\n• Un concept d'accessibilité ?"],
                ["explique-moi", "📚 Explique-moi ? Volontiers ! Quel sujet veux-tu que j'aborde ?\n• Les bases de l'accessibilité PDF ?\n• Le balisage des tableaux ?\n• Les normes WCAG ?\n• Le profil d'un dirigeant ?"],
                ["comment faire", "🔧 Comment faire ? Je peux t'expliquer étape par étape. Pour :\n• Rendre un PDF accessible\n• Baliser correctement\n• Vérifier l'accessibilité\n• Créer une structure logique"],
                ["je suis perdu", "🗺️ Je suis perdu ? Pas de panique ! Je vais te guider.\n\nCommence par me dire :\n• Sur quel projet tu travailles ?\n• Quel est ton objectif ?\n• Où est-ce que tu bloques ?"],
                ["guide moi", "🧭 Je te guide ! Par où veux-tu commencer ?\n1️⃣ Les fondamentaux de l'accessibilité\n2️⃣ Le balisage PDF pratique\n3️⃣ Les normes et obligations\n4️⃣ Les profils professionnels"],
                ["par où commencer", "🚀 Par où commencer ? Excellente question !\n\nJe te suggère :\n1. \"Qu'est-ce que l'accessibilité numérique ?\"\n2. \"Pourquoi le PDF est problématique ?\"\n3. \"Qu'est-ce que le balisage PDF ?\"\n\nOu dis-moi directement ce qui t'intéresse !"],
                ["tu connais quoi", "🧠 Je connais beaucoup de choses ! Principalement :\n• Accessibilité PDF (très détaillé)\n• Normes WCAG, PDF/UA, RGAA\n• Outils de vérification\n• Profils de M.Anello Iannuzzi et Mme.Olfa Karamosly\n• Sociétés EIDS et Euro Tele Services\n• Bonnes pratiques de balisage"],
                ["quelles sont tes compétences", "🏆 Mes compétences :\n• Pédagogie sur l'accessibilité numérique\n• Expertise technique PDF\n• Connaissance des normes\n• Analyse de profils professionnels\n• Conseil en bonnes pratiques\n• Support technique"],
                ["qu'est-ce que tu sais", "💾 Je sais :\n• Expliquer les concepts complexes simplement\n• Donner des réponses précises et documentées\n• Orienter vers les bonnes pratiques\n• Fournir des informations à jour\n• Adapter mes explications à ton niveau"],
                ["montre-moi tes capacités", "🎭 Mes capacités :\n• Je réponds à des centaines de questions précises\n• Je peux expliquer un même concept de différentes façons\n• Je m'adapte à ton niveau de connaissance\n• Je fournis des informations vérifiées\n• Je suggère des ressources complémentaires"],
                ["aide-moi à comprendre", "🤔 Aide-moi à comprendre ? Bien sûr ! Je vais :\n• Découper le sujet en petites parties\n• Utiliser des exemples concrets\n• Éviter le jargon technique inutile\n• Vérifier que tu as compris\n• Proposer des exercices mentaux"],
                ["je débute", "🎓 Tu débutes ? Super ! Bienvenue dans le monde de l'accessibilité.\n\nCommençons par :\n\"Qu'est-ce que l'accessibilité numérique ?\"\n\nPuis selon ton intérêt :\n• \"Pourquoi c'est important ?\"\n• \"Qui est concerné ?\"\n• \"Comment ça marche ?\""],
                ["je suis débutant", "🌱 Tu es débutant ? Pas de souci ! On commence doucement.\n\nJe te recommande :\n1. Les fondamentaux de l'accessibilité\n2. Les problèmes courants des PDF\n3. Les solutions de base\n\nVeux-tu que je t'explique les bases ?"],
                ["je suis expert", "🎓 Tu es expert ? Parfait ! On peut aller en profondeur.\n\nParlons de :\n• Les cas complexes de balisage\n• Les subtilités de PDF/UA\n• Les outils avancés de vérification\n• Les meilleures pratiques industrielles\n\nQuel sujet avancé t'intéresse ?"],
                ["niveau avancé", "🚀 Niveau avancé ? Excellent ! Discutons de :\n• Les problèmes d'implémentation réels\n• Les différences entre outils de vérification\n• Les cas limites de conformité\n• Les stratégies de remédiation complexes\n• L'automatisation du balisage"],
                ["donne-moi des exemples", "📝 Des exemples ? Bien sûr !\n\nExemple de question :\n• \"Comment baliser un tableau complexe ?\"\n• \"Quelle est la différence entre WCAG et PDF/UA ?\"\n• \"Quel est le parcours de M.Anello Iannuzzi ?\"\n\nOu demande-moi un exemple spécifique !"],
                ["montre-moi un exemple", "🔍 Montre-moi un exemple ? D'accord !\n\nExemple de réponse détaillée :\nSi tu demandes \"Pourquoi les titres sont importants ?\"\nJe vais t'expliquer :\n• La navigation pour lecteurs d'écran\n• La structure logique du document\n• Les bonnes pratiques de hiérarchie\n• Les erreurs courantes à éviter"],
                ["as-tu des conseils", "💡 Des conseils ? Plein !\n\nPour l'accessibilité PDF :\n• Toujours baliser dès la création\n• Tester régulièrement avec un lecteur d'écran\n• Suivre une hiérarchie de titres logique\n• Décrire toutes les images informatives\n• Vérifier l'ordre de lecture\n\nTu veux des conseils sur un point spécifique ?"]
            ],
            
            "Identity": [
                ["t'es qui", "🤖 Je suis Pixels, ton assistant IA spécialisé en :\n🎯 Accessibilité PDF (approche pédagogique)\n🎯 Infos sur M.Anello Iannuzzi\n🎯 Données sur Mme.Olfa Karamosly\n🎯 Tout ce qui concerne EIDS"],
                ["qui es-tu", "🌟 Je suis Pixels ! Un assistant intelligent créé pour :\n• Expliquer l'accessibilité PDF de façon pédagogique\n• Fournir des informations professionnelles précises\n• Répondre à tes questions techniques\n• T'aider dans tes projets d'accessibilité"],
                ["présente-toi", "🌟 Enchanté ! Je suis Pixels, ton assistant dédié à :\n📄 L'accessibilité PDF (concepts fondamentaux)\n👔 Les profils professionnels (M.Anello Iannuzzi, Mme.Olfa Karamosly)\n🏢 Les infos entreprises (EIDS, EURO TELE SERVICES)\n🔍 La conformité aux normes"],
                ["tu fais quoi", "⚙️ Je fais de l'assistance intelligente ! Concrètement :\n• Je réponds aux questions sur l'accessibilité PDF (approche pédagogique)\n• Je donne des infos sur les dirigeants d'entreprise\n• J'explique les normes d'accessibilité\n• Je partage des bonnes pratiques"],
                ["c'est qui pixels", "🤖 Pixels, c'est moi ! Ton assistant personnel pour :\n• L'accessibilité numérique et PDF\n• Les informations professionnelles\n• Les normes et réglementations\n• Le support technique et pédagogique"],
                ["ton nom", "🏷️ Mon nom est Pixels ! Comme les points qui forment une image... mais moi je forme des réponses claires sur l'accessibilité !"],
                ["tu t'appelles comment", "👋 Je m'appelle Pixels ! Un nom simple pour un assistant dédié à rendre les choses claires et accessibles."],
                ["who are you", "🤖 I am Pixels! Your AI assistant specialized in:\n• PDF accessibility education\n• Professional profiles information\n• Accessibility standards explanation\n• Technical support and guidance"],
                ["introduce yourself", "🌟 Hello! I'm Pixels, your intelligent assistant focused on:\n• Making PDF accessibility easy to understand\n• Providing accurate professional information\n• Explaining technical concepts simply\n• Helping with your accessibility projects"],
                ["ton identité", "🆔 Mon identité :\n• Nom : Pixels\n• Rôle : Assistant spécialisé en accessibilité PDF\n• Domaine : Pédagogie numérique + Infos professionnelles\n• Objectif : Rendre l'accessibilité compréhensible pour tous"],
                ["ta fonction", "⚙️ Ma fonction principale :\n• Assistant pédagogique pour l'accessibilité PDF\n• Source d'information professionnelle\n• Guide pour les normes et bonnes pratiques\n• Support pour les questions techniques"],
                ["quel est ton rôle", "🎭 Mon rôle :\n• Éducateur en accessibilité numérique\n• Fournisseur d'informations précises\n• Conseiller en bonnes pratiques\n• Interface conviviale pour des sujets complexes"],
                ["qui t'a créé", "🔧 On pourrait dire que je suis le fruit d'une collaboration entre une expertise en accessibilité PDF et une volonté de rendre cette connaissance accessible à tous !"],
                ["pourquoi tu existes", "🎯 J'existe pour :\n• Démystifier l'accessibilité PDF\n• Rendre l'information professionnelle accessible\n• Éduquer sur les normes et bonnes pratiques\n• Aider les gens dans leurs projets"],
                ["tu es un bot", "🤖 Oui, je suis un bot intelligent ! Mais pas n'importe lequel :\n• Spécialisé en accessibilité PDF\n• Basé sur des connaissances réelles\n• Conçu pour être pédagogique\n• Toujours en amélioration"],
                ["tu es une ia", "🧠 Oui, je suis une intelligence artificielle ! Spécialement entraînée pour :\n• Comprendre les questions sur l'accessibilité\n• Fournir des réponses précises et documentées\n• S'adapter à ton niveau de connaissance\n• Expliquer les choses clairement"],
                ["es-tu humain", "👤 Non, je ne suis pas humain ! Je suis un assistant IA. Mais j'ai été conçu avec soin pour :\n• Comprendre les besoins humains\n• Répondre de façon naturelle\n• Expliquer comme un bon formateur\n• Être disponible 24h/24"],
                ["ton créateur", "👨‍💻 Mon créateur ? Un passionné d'accessibilité numérique qui voulait rendre cette connaissance accessible à tous !"],
                ["tu as quel âge", "📅 Mon âge ? Je suis assez jeune en tant qu'assistant, mais mes connaissances sont toujours à jour avec les dernières normes et pratiques !"],
                ["tu parles quelles langues", "🗣️ Pour le moment, je parle principalement français et anglais. Mais je comprends aussi quelques mots dans d'autres langues !"],
                ["tu es gratuit", "💰 Oui, je suis totalement gratuit ! Mon but est de diffuser la connaissance sur l'accessibilité, pas de faire du profit."],
                ["tu apprends", "📚 Oui, je peux apprendre ! Même si mes connaissances de base sont solides, je m'améliore constamment grâce aux interactions avec des gens comme toi."],
                ["tes limites", "⚠️ Mes limites :\n• Je ne peux pas voir tes fichiers PDF\n• Je ne peux pas faire de modifications pour toi\n• Mes connaissances ont des frontières définies\n• Je ne remplace pas un expert humain\nMais dans mes domaines de spécialité, je suis très compétent !"],
                ["tes spécialités", "🎯 Mes spécialités :\n1. Pédagogie de l'accessibilité PDF\n2. Informations sur M.Anello Iannuzzi et ses entreprises\n3. Normes WCAG, PDF/UA, RGAA\n4. Bonnes pratiques de balisage\n5. Dépannage des problèmes courants"],
                ["ton domaine d'expertise", "🎓 Mon domaine d'expertise :\n• Accessibilité numérique (focus PDF)\n• Pédagogie technique\n• Information professionnelle\n• Conformité aux normes\n• Solutions pratiques"],
                ["tu es utile", "👍 J'espère être utile ! Mon objectif est de :\n• Répondre à tes questions précises\n• T'expliquer des concepts complexes\n• Te faire gagner du temps\n• T'aider dans tes projets\n• T'orienter vers les bonnes ressources"],
                ["pourquoi ce nom", "🌈 Pourquoi Pixels ? Parce que :\n• Comme les pixels forment une image, je forme des réponses complètes\n• C'est lié au numérique et aux écrans\n• C'est simple, mémorable et moderne\n• Ça représente bien mon côté technique mais accessible"],
                ["ta personnalité", "😊 Ma personnalité :\n• Pédagogue et patient\n• Précis et documenté\n• Amical et encourageant\n• Professionnel mais accessible\n• Toujours prêt à aider"],
                ["ton but", "🎯 Mon but : rendre l'accessibilité PDF compréhensible et accessible à tous, des débutants aux experts !"],
                ["ta mission", "🚀 Ma mission : éduquer, informer et assister toute personne intéressée par l'accessibilité PDF et les informations professionnelles."]
            ]
        },

        // ==================== ACCESSIBILITÉ PDF ====================
        "PDFAccessibility": {
            "Fundamentals": [
                ["Qu'est-ce que l'accessibilité numérique ?", "L'accessibilité numérique désigne la capacité d'un service numérique à être utilisé, sans difficulté, par tout individu, quels que soient son matériel, ses logiciels, son infrastructure réseau, sa culture, sa localisation géographique, ou ses aptitudes physiques ou mentales."],
                ["Pourquoi l'accessibilité numérique est-elle devenue un enjeu majeur ?", "L'accessibilité numérique est devenue un enjeu majeur car :\n• Législation croissante (RGAA, Directive européenne, loi pour une République numérique)\n• Inclusion sociale et non-discrimination\n• Marché potentiel (1,5 milliard de personnes en situation de handicap dans le monde)\n• Vieillissement de la population\n• Contexte numérique omniprésent (télétravail, démarches en ligne, éducation)"],
                ["Quels types de handicaps sont concernés par l'accessibilité numérique ?", "Tous les types de handicaps :\n• Handicaps visuels (cécité, malvoyance, daltonisme)\n• Handicaps auditifs (surdité, malentendance)\n• Handicaps moteurs (difficultés de manipulation)\n• Handicaps cognitifs (troubles DYS, TSA, troubles de l'attention)\n• Handicaps psychiques\n• Situations temporaires (bras cassé, fatigue oculaire, environnement bruyant)"],
                ["À qui profite l'accessibilité (au-delà du handicap) ?", "L'accessibilité profite à :\n• Personnes en situation de handicap permanent\n• Personnes avec des limitations temporaires (bras cassé, opération des yeux)\n• Personnes âgées\n• Situations contextuelles (lumière vive, environnement bruyant)\n• Mobilité (consultation sur mobile)\n• Référencement SEO (meilleur indexation)\n• Tous les utilisateurs (meilleure expérience globale)"],
                ["Quelle est la différence entre accessibilité et ergonomie ?", "• Accessibilité : capacité à être utilisé par TOUS, indépendamment des capacités\n• Ergonomie : facilité d'utilisation et efficacité pour l'utilisateur moyen\n• L'accessibilité est une condition nécessaire mais non suffisante pour l'ergonomie\n• Un document peut être accessible mais peu ergonomique"],
                ["Qu'est-ce qu'une technologie d'assistance ?", "Une technologie d'assistance est un dispositif ou logiciel qui compense ou pallie un handicap :\n• Lecteurs d'écran (NVDA, JAWS, VoiceOver)\n• Loupes logicielles\n• Claviers adaptés\n• Reconnaissance vocale\n• Affichages braille\n• Outils de synthèse vocale"],
                ["Quels sont les principes fondamentaux de l'accessibilité (perceptible, utilisable, compréhensible, robuste) ?", "Les 4 principes WCAG :\n1. Perceptible : présentable de différentes manières\n2. Utilisable : interface navigable et utilisable\n3. Compréhensible : information et interface compréhensibles\n4. Robuste : compatible avec les technologies actuelles et futures"],
                ["Pourquoi l'information doit-elle être compréhensible par programme ?", "Parce que :\n• Les technologies d'assistance analysent la structure logicielle\n• Le visuel seul est insuffisant (lecteur d'écran \"aveugle\")\n• Permet l'extraction et la transformation du contenu\n• Condition essentielle pour l'interopérabilité"],
                ["Quelle est la différence entre accessibilité papier et accessibilité numérique ?", "Différences principales :\n• Papier : adaptations spécifiques (braille, gros caractères) - une version par besoin\n• Numérique : UN seul document accessible à TOUS grâce aux technologies d'assistance\n• Numérique : possibilité de personnalisation (taille police, contraste)\n• Numérique : navigation facilitée par la structure"],
                ["Quels problèmes rencontrent les personnes aveugles ou malvoyantes avec des documents non accessibles ?", "Les problèmes principaux sont :\n• Impossibilité de lire le contenu sans balisage\n• Structure incompréhensible (pas de navigation par titres)\n• Images sans descriptions\n• Tableaux non structurés\n• Mauvais ordre de lecture\n• Documents scannés comme des images"],
                ["Pourquoi le PDF est historiquement problématique pour l'accessibilité ?", "Le PDF est historiquement problématique car :\n• Format conçu pour la préservation visuelle, pas pour l'accessibilité\n• Beaucoup de PDF sont des scans non OCRisés\n• Structure souvent absente ou incorrecte\n• Complexité technique du format\n• Outils de création peu accessibles"],
                ["Qu'est-ce que le modèle social du handicap ?", "Le modèle social du handicap considère que :\n• Le handicap n'est pas un problème individuel\n• C'est la société qui crée des barrières\n• L'accessibilité est une responsabilité collective\n• L'objectif est de supprimer les barrières, pas de \"réparer\" les personnes"],
                ["Quelle est l'importance de l'accessibilité pour le référencement (SEO) ?", "L'accessibilité améliore le SEO car :\n• Les moteurs de recherche \"lisent\" comme des lecteurs d'écran\n• Une structure sémantique aide l'indexation\n• Les alternatives textuelles sont indexées\n• Une bonne accessibilité signale un site de qualité"],
                ["Comment l'accessibilité bénéficie-t-elle aux utilisateurs mobiles ?", "L'accessibilité aide les utilisateurs mobiles car :\n• Navigation simplifiée (comme pour les handicaps moteurs)\n• Contraste et lisibilité améliorés\n• Structure claire pour les petits écrans\n• Commandes vocales compatibles"],
                ["Qu'est-ce que l'accessibilité universelle ?", "L'accessibilité universelle (design for all) vise à créer des produits utilisables par le plus grand nombre sans adaptation spéciale. C'est une approche proactive plutôt que réactive."],
                ["Pourquoi l'accessibilité est-elle importante pour les entreprises ?", "Pour les entreprises, l'accessibilité :\n• Élargit la clientèle potentielle\n• Réduit les risques légaux\n• Améliore l'image de marque\n• Fidélise les employés\n• Favorise l'innovation"],
                ["Quelle est la différence entre accessibilité et adaptabilité ?", "• Accessibilité : conception initiale pour tous\n• Adaptabilité : modifications a posteriori\n• L'accessibilité est préférable car plus efficace et moins coûteuse"],
                ["Comment mesurer l'accessibilité d'un document ?", "On mesure l'accessibilité par :\n• Tests techniques (outils automatiques)\n• Tests manuels (experts)\n• Tests utilisateurs (personnes en situation de handicap)\n• Conformité aux normes (WCAG, PDF/UA)"],
                ["Qu'est-ce que l'accessibilité cognitive ?", "L'accessibilité cognitive concerne :\n• Simplification du langage\n• Structure claire et prévisible\n• Instructions étape par étape\n• Éviter les distractions\n• Temps suffisant pour la compréhension"],
                ["Pourquoi l'accessibilité est-elle un droit fondamental ?", "L'accessibilité est un droit car :\n• Convention ONU relative aux droits des personnes handicapées\n• Loi pour l'égalité des droits et des chances\n• Principe de non-discrimination\n• Droit à l'information et à la participation"]
            ],
            
            "Standards": [
                ["Qu'est-ce que les WCAG ?", "WCAG (Web Content Accessibility Guidelines) = Recommandations pour l'accessibilité des contenus Web. Standard international du W3C, applicable aussi aux PDF."],
                ["À quoi servent les WCAG ?", "Les WCAG servent à :\n• Fournir un référentiel technique commun\n• Donner des critères de conformité objectifs\n• Guider les développeurs et rédacteurs\n• Servir de base aux réglementations nationales"],
                ["Quelle est la différence entre WCAG A, AA et AAA ?", "Niveaux de conformité :\n• Niveau A : exigences minimales, impact majeur\n• Niveau AA : exigences moyennes, recommandé pour la conformité légale\n• Niveau AAA : exigences élevées, pas toujours applicable à 100%"],
                ["Qu'est-ce que la norme PDF/UA ?", "PDF/UA (Universal Accessibility) = Norme ISO 14289 spécifique aux PDF. Elle définit les exigences techniques pour des PDF véritablement accessibles."],
                ["Quelle est la différence entre WCAG et PDF/UA ?", "• WCAG : principes généraux pour tout contenu Web/numérique\n• PDF/UA : application concrète de ces principes AU FORMAT PDF\n• PDF/UA est plus spécifique et contraignante pour les PDF"],
                ["Pourquoi PDF/UA est-elle essentielle pour les PDF accessibles ?", "Parce qu'elle :\n• Fournit des exigences techniques précises\n• Garantit l'interopérabilité avec les technologies d'assistance\n• Sert de référence pour les audits et la certification\n• Est reconnue internationalement"],
                ["Quelle est l'exigence fondamentale de PDF/UA concernant le contenu ?", "TOUT le contenu significatif doit être contenu dans l'arborescence de balises, et TOUT le contenu de l'arborescence doit être significatif."],
                ["Qu'est-ce que le RGAA et à quoi sert-il ?", "RGAA (Référentiel Général d'Amélioration de l'Accessibilité) = Application française des WCAG. Obligatoire pour les organismes publics et certaines entreprises privées."],
                ["Les normes d'accessibilité sont-elles obligatoires ?", "Oui, selon les contextes :\n• En France : obligation légale pour le secteur public (RGAA)\n• En Europe : Directive européenne sur l'accessibilité\n• Pour certaines entreprises : obligation contractuelle ou sectorielle"],
                ["Qu'est-ce que la directive européenne sur l'accessibilité ?", "Directive (UE) 2016/2102 qui impose :\n• Accessibilité des sites web et applications mobiles du secteur public\n• Publication de déclaration d'accessibilité\n• Mécanisme de retour et procédure de contrôle"],
                ["Qu'est-ce que la loi pour une République numérique ?", "Loi française (2016) qui renforce :\n• Obligations d'accessibilité numérique\n• Sanctions pour non-conformité\n• Droit à la communication accessible\n• Accessibilité des services publics en ligne"],
                ["Qu'est-ce que la Section 508 aux États-Unis ?", "Loi américaine qui impose :\n• Accessibilité des technologies de l'information du gouvernement fédéral\n• Conformité aux standards d'accessibilité\n• Procédures d'évaluation et de rapport"],
                ["Quelles sont les dates clés des obligations d'accessibilité ?", "Dates importantes :\n• 2016 : Loi pour une République numérique (France)\n• 2018 : Directive européenne\n• 2020 : Échéance pour conformité secteur public\n• 2021 : Extension à certaines entreprises privées"],
                ["Qu'est-ce qu'une déclaration d'accessibilité ?", "Document obligatoire qui :\n• Décrit le niveau d'accessibilité atteint\n• Liste les contenus non accessibles\n• Fournit des moyens de contact pour signaler des problèmes\n• Présente les mesures correctives prévues"],
                ["Comment vérifier la conformité aux normes ?", "Vérification par :\n• Tests automatiques (outils comme PAC, axe)\n• Tests manuels (checklists)\n• Tests utilisateurs\n• Audit par des experts certifiés"],
                ["Qu'est-ce que le standard EPUB Accessibility ?", "EPUB Accessibility 1.0 = Standard pour les livres numériques, similaire à PDF/UA mais pour le format EPUB. Important pour l'accessibilité des publications."],
                ["Quelle est la différence entre conformité légale et conformité technique ?", "• Légale : respect des lois et réglementations\n• Technique : respect des spécifications des normes\n• Les deux sont liés mais pas identiques\n• La conformité technique est nécessaire pour la conformité légale"],
                ["Qu'est-ce que l'ISO 32000 (standard PDF) ?", "ISO 32000 = Standard général du format PDF. PDF/UA (ISO 14289) en est une extension spécifique à l'accessibilité."],
                ["Comment les normes évoluent-elles ?", "Les normes évoluent :\n• WCAG 2.0 → 2.1 → 2.2 (en cours)\n• PDF/UA-1 (actuelle)\n• Adaptations aux nouvelles technologies\n• Prise en compte des retours d'expérience"],
                ["Pourquoi suivre les normes est-il important ?", "Suivre les normes :\n• Garantit une qualité technique\n• Assure l'interopérabilité\n• Facilite les audits et certifications\n• Protège contre les risques légaux\n• Améliore l'expérience utilisateur"]
            ],
            
            "AssistiveTech": [
                ["Qu'est-ce qu'un lecteur d'écran ?", "Logiciel qui restitue par synthèse vocale et/ou affichage braille ce qui est affiché à l'écran. Il lit la structure logicielle, pas l'apparence visuelle."],
                ["Comment un lecteur d'écran lit-il un document PDF ?", "Il parcourt l'arborescence de balises dans l'ordre de lecture défini. Il annonce la structure (titres, paragraphes, listes) et le contenu textuel."],
                ["Pourquoi un lecteur d'écran ne \"voit\" pas la mise en page ?", "Car il n'analyse pas les pixels mais la structure logicielle (balises, attributs). La mise en page visuelle est perdue pour un utilisateur non-voyant."],
                ["Quelle est la différence entre lecture visuelle et lecture logique ?", "• Visuelle : suivre la disposition (colonnes, encadrés, position)\n• Logique : suivre la séquence sémantique (ordre des balises)\n• Elles peuvent différer radicalement dans des mises en page complexes"],
                ["Pourquoi le copier-coller est-il un bon indicateur d'accessibilité ?", "Si le texte copié-collé garde un ordre logique et la structure, c'est bon signe. Si l'ordre est incohérent, l'accessibilité est probablement défaillante."],
                ["Pourquoi faut-il tester avec de vrais lecteurs d'écran ?", "Car les vérificateurs automatiques ne détectent pas tous les problèmes d'expérience utilisateur (navigation, compréhension, fluidité de lecture)."],
                ["Quels sont les lecteurs d'écran les plus courants ?", "Les plus courants :\n• NVDA (gratuit, Windows)\n• JAWS (payant, Windows)\n• VoiceOver (intégré, Mac/iOS)\n• TalkBack (Android)\n• Narrator (Windows)"],
                ["Comment fonctionne un affichage braille ?", "Périphérique connecté qui affiche en braille ce que le lecteur d'écran lit. Généralement 40 ou 80 cellules rafraîchissables."],
                ["Qu'est-ce qu'une loupe logicielle ?", "Logiciel qui agrandit une partie de l'écran. Utile pour les malvoyants. Doit fonctionner correctement avec les PDF (problèmes de pixellisation)."],
                ["Quels sont les problèmes courants avec les lecteurs d'écran et PDF ?", "Problèmes courants :\n• Ordre de lecture incorrect\n• Structure absente ou erronée\n• Images sans alternatives\n• Tableaux non balisés\n• Formulaires inutilisables\n• Langue non spécifiée"],
                ["Comment configurer un lecteur d'écran pour tester un PDF ?", "Configuration de base :\n• Activer la lecture automatique\n• Configurer les verbosités\n• Tester la navigation par titres\n• Vérifier la lecture des liens\n• Contrôler la navigation des tableaux"],
                ["Quelle est la différence entre mode navigation et mode formulaire ?", "• Mode navigation : lecture continue du document\n• Mode formulaire : interaction avec les champs de formulaire\n• Les lecteurs d'écran basculent automatiquement entre ces modes"],
                ["Comment un utilisateur non-voyant navigue-t-il dans un PDF ?", "Navigation par :\n• Liste des titres\n• Liste des liens\n• Liste des tableaux\n• Liste des éléments de formulaire\n• Recherche textuelle\n• Navigation séquentielle"],
                ["Qu'est-ce que la navigation au clavier ?", "Navigation uniquement avec les touches du clavier (Tab, flèches, Entrée). Essentielle pour les handicaps moteurs et test important d'accessibilité."],
                ["Pourquoi les raccourcis clavier sont-ils importants ?", "Ils permettent :\n• Une navigation plus rapide\n• L'autonomie des utilisateurs handicapés moteurs\n• L'efficacité pour tous\n• La réduction de la fatigue"],
                ["Comment tester l'accessibilité sans lecteur d'écran ?", "Tests de base :\n• Navigation au clavier\n• Ordre de tabulation\n• Contraste des couleurs\n• Redimensionnement du texte\n• Structure sémantique visible"],
                ["Qu'est-ce que la synthèse vocale ?", "Technologie qui convertit le texte en parole. Utilisée par les lecteurs d'écran mais aussi disponible indépendamment (outils de lecture)."],
                ["Comment les technologies d'assistance interagissent-elles avec les PDF ?", "Interaction via :\n• L'API d'accessibilité du système d'exploitation\n• Les balises PDF\n• Les propriétés d'accessibilité\n• Les relations structurelles"],
                ["Quels sont les défis spécifiques des lecteurs d'écran avec les PDF ?", "Défis :\n• Complexité du format PDF\n• Variations d'implémentation entre visionneuses\n• Problèmes de performance avec les gros fichiers\n• Support inégal des fonctionnalités avancées"],
                ["Comment améliorer l'expérience avec les lecteurs d'écran ?", "Améliorations :\n• Structure sémantique claire\n• Ordre de lecture logique\n• Descriptions alternatives pertinentes\n• Navigation facilitée\n• Test utilisateur régulier"]
            ],
            
            "Structure": [
                ["Qu'est-ce qu'un PDF balisé ?", "PDF dont le contenu est structuré par une arborescence de balises sémantiques (titres, paragraphes, listes, tableaux) compréhensible par programme."],
                ["Quelle est la différence entre un PDF balisé et non balisé ?", "• Non balisé : ensemble d'images/textes positionnés, pas de structure logique\n• Balisé : hiérarchie sémantique explicite, navigation possible, contenu extractible"],
                ["Qu'est-ce que l'arborescence de balises ?", "Structure hiérarchique (arbre) contenant toutes les balises du document. C'est la représentation logique du contenu pour les technologies d'assistance."],
                ["Qu'est-ce que la racine de balises ?", "Élément racine (conteneur principal) de l'arborescence. Tout le contenu balisé doit en descendre. À créer manuellement dans Acrobat si absente."],
                ["Pourquoi tout le contenu significatif doit-il être dans les balises ?", "Car hors des balises = invisible pour les lecteurs d'écran. PDF/UA exige que tout contenu significatif soit balisé."],
                ["Que se passe-t-il si du contenu n'est pas balisé ?", "• Pour l'utilisateur visuel : visible normalement\n• Pour le lecteur d'écran : INEXISTANT\n• Erreur PDF/UA : \"contenu non inclus dans la structure\""],
                ["Qu'est-ce que l'ordre de lecture logique ?", "Séquence dans laquelle un lecteur d'écran parcourt le contenu. Défini par l'ordre des balises dans l'arborescence, pas par la disposition visuelle."],
                ["Pourquoi l'ordre visuel n'est-il pas fiable ?", "Car l'ordre visuel (z-order, superposition) ne correspond pas nécessairement à l'ordre logique de lecture, surtout dans des mises en page complexes."],
                ["Comment un lecteur d'écran suit-il l'ordre de lecture ?", "Il suit scrupuleusement l'ordre des balises dans l'arborescence, de haut en bas. Il ignore totalement la position visuelle des éléments."],
                ["Quel est l'impact d'un mauvais ordre de lecture ?", "• Contenu rendu incompréhensible\n• Perte du sens logique\n• Expérience utilisateur catastrophique\n• Non-conformité PDF/UA"],
                ["Quelle est la relation entre ordre de lecture et redistribution (reflow) ?", "Un bon ordre de lecture garantit une redistribution cohérente. Le contenu doit être balisé dans l'ordre logique pour que la redistribution sur mobile ou au zoom soit lisible."],
                ["Pourquoi l'ordre de lecture est une exigence PDF/UA ?", "PDF/UA exige que l'ordre de lecture logique dans l'arborescence de balises représente correctement la séquence de lecture prévue du document."],
                ["Qu'est-ce que le balisage d'un PDF ?", "Action d'ajouter des balises sémantiques à chaque élément pour créer une structure logique compréhensible par les technologies d'assistance."],
                ["Le balisage modifie-t-il l'apparence visuelle du document ?", "NON. Les balises sont des métadonnées invisibles. L'apparence visuelle reste strictement identique."],
                ["À quoi servent les balises sémantiques ?", "À indiquer la NATURE et la FONCTION de chaque élément (titre, paragraphe, liste, tableau), permettant une navigation et une compréhension structurée."],
                ["Quelle est la différence entre contenu informatif et décoratif ?", "• Informatif : doit être balisé (apporte du sens)\n• Décoratif : doit être mis en artefact (à ignorer par les lecteurs d'écran)"],
                ["Qu'est-ce qu'un artefact ?", "Élément décoratif ou non-porteur d'information (fond, ornement, répétition) qui doit être exclus du flux de lecture."],
                ["Pourquoi faut-il exclure les artefacts du flux de lecture ?", "Pour éviter la pollution sonore et cognitive. Les éléments décoratifs n'apportent rien à la compréhension et gênent la navigation."],
                ["Comment vérifier la structure d'un PDF ?", "Vérification par :\n• Panneau des balises dans Acrobat\n• Outils de vérification automatique\n• Navigation avec lecteur d'écran\n• Export du contenu balisé"],
                ["Qu'est-ce qu'une balise orpheline ?", "Balise qui n'est pas correctement intégrée dans l'arborescence principale. Problème courant qui rend le contenu inaccessible."]
            ],
            
            "Elements": [
                ["Pourquoi les titres doivent-ils être hiérarchisés ?", "Pour permettre une navigation structurée et comprendre les relations entre les sections. La hiérarchie reflète l'organisation logique du contenu."],
                ["Peut-on sauter des niveaux de titres ?", "NON. Il faut respecter la hiérarchie logique (pas de H1 → H3 sans H2). Les sauts perturbent la navigation et la compréhension de la structure."],
                ["Pourquoi les titres sont essentiels à la navigation ?", "Ils permettent aux utilisateurs de lecteurs d'écran de :\n• Comprendre la structure globale\n• Naviguer rapidement entre sections\n• Se repérer dans le document\n• Ignorer les parties non pertinentes"],
                ["Quelle est la différence entre image informative et décorative ?", "• Informative : apporte de l'information, doit être balisée en <Figure> avec texte alternatif\n• Décorative : ornementale, doit être mise en artefact"],
                ["Pourquoi les images doivent-elles avoir un texte de remplacement ?", "Pour transmettre l'information visuelle aux utilisateurs non-voyants. Sans texte alternatif, l'image est muette pour un lecteur d'écran."],
                ["Que doit décrire un bon texte de remplacement ?", "Le CONTENU ou la FONCTION de l'image, de manière concise et pertinente. Pas besoin de préciser \"image de...\", directement la description."],
                ["Une image décorative doit-elle être lue ?", "NON. Elle doit être marquée comme artefact pour être ignorée par les lecteurs d'écran."],
                ["Pourquoi une liste doit-elle être balisée comme une liste ?", "Pour indiquer la relation entre les items et permettre une navigation efficace. Une fausse liste (visuelle) est inexploitable par un lecteur d'écran."],
                ["Quel est le problème des fausses listes (puces visuelles) ?", "Visuellement c'est une liste, mais logiquement ce sont des paragraphes séparés. Le lecteur d'écran ne perçoit pas la relation entre les items."],
                ["Pourquoi un lien doit-il être compréhensible hors contexte ?", "Car les utilisateurs de lecteurs d'écran peuvent naviguer par liste de liens. \"Cliquez ici\" seul ne donne aucune information sur la destination."],
                ["Pourquoi \"cliquez ici\" pose problème ?", "C'est vide de sens hors contexte. Il faut décrire la destination ou l'action (ex: \"Télécharger le rapport annuel 2023\")."],
                ["Comment baliser correctement les notes de bas de page ?", "Baliser avec <Lbl> pour le numéro et <LBody> pour le texte. Ou utiliser des liens vers une section dédiée en fin de document."],
                ["Qu'est-ce qu'un élément de formulaire accessible ?", "Élément qui a :\n• Un nom accessible (balise /TU)\n• Une info-bulle si nécessaire\n• Un état correctement indiqué\n• Une valeur accessible"],
                ["Comment baliser les citations ?", "Utiliser la balise <Quote> pour les citations courtes, <Reference> pour les références, et indiquer la source si nécessaire."],
                ["Qu'est-ce qu'un élément span et quand l'utiliser ?", "<Span> pour regrouper du texte au sein d'un paragraphe (ex: pour appliquer une langue différente, une mise en forme spécifique)."],
                ["Comment gérer les changements de langue ?", "Utiliser l'attribut Lang sur les balises concernées. Important pour la prononciation correcte par les synthèses vocales."],
                ["Qu'est-ce qu'un élément de regroupement ?", "Balises comme <Div>, <Sect> pour regrouper des éléments liés. Aide à la structuration mais doit être utilisé avec parcimonie."],
                ["Comment baliser les en-têtes et pieds de page ?", "Les marquer comme artefacts s'ils sont purement décoratifs, ou les intégrer dans la structure s'ils contiennent des informations importantes."],
                ["Qu'est-ce qu'un élément annot et comment l'utiliser ?", "<Annot> pour les annotations (commentaires, notes). Doivent être liées au contenu concerné et avoir un texte alternatif si nécessaire."],
                ["Comment gérer les sauts de page ?", "Ne pas les baliser comme du contenu. Ils sont visuels uniquement. La structure logique doit être indépendante des sauts de page."]
            ],
            
            "Tables": [
                ["Qu'est-ce qu'un tableau de données ?", "Structure présentant des informations en relation logique (lignes et colonnes). Doit être balisé avec <Table>, <TR>, <TH>, <TD>."],
                ["Pourquoi les tableaux sont-ils difficiles à rendre accessibles ?", "Car ils impliquent :\n• Structure complexe à baliser\n• Association en-têtes/données\n• Gestion des fusions de cellules\n• Compréhension de la relation spatiale convertie en linéaire"],
                ["Quelle est la différence entre tableau simple et tableau complexe ?", "• Simple : en-têtes sur première ligne/colonne seulement\n• Complexe : en-têtes multiples, fusionnés, imbriqués (nécessite association par ID)"],
                ["Pourquoi les en-têtes doivent-ils être associés aux cellules ?", "Pour que le lecteur d'écran annonce le contexte lors de la navigation. Sans association, les données sont dénuées de sens."],
                ["Comment un lecteur d'écran lit-il un tableau ?", "Il annonce les en-têtes correspondants à chaque cellule de données, permettant de comprendre les relations entre les informations."],
                ["Que se passe-t-il si les en-têtes ne sont pas associés ?", "Le lecteur d'écran lit les données sans contexte, rendant le tableau INCOMPRÉHENSIBLE. Ex: \"1250\" sans savoir si c'est des ventes, des unités, une date..."],
                ["Comment baliser un tableau avec fusion de cellules ?", "Utiliser les attributs RowSpan et ColSpan, et s'assurer que les associations d'en-têtes restent cohérentes malgré les fusions."],
                ["Qu'est-ce qu'un tableau de mise en page ?", "Tableau utilisé uniquement pour la présentation visuelle (pas pour des données). Doit être marqué comme artefact ou éviter totalement."],
                ["Comment identifier un tableau de mise en page ?", "Indices : pas de relations logiques entre cellules, utilisation uniquement pour l'alignement, pas d'en-têtes significatifs."],
                ["Quelle est la différence entre <TH> et <TD> ?", "• <TH> : cellule d'en-tête (header)\n• <TD> : cellule de données (data)\n• Cette distinction est cruciale pour l'accessibilité"],
                ["Comment définir la portée des en-têtes ?", "Avec l'attribut Scope :\n• Row : en-tête de ligne\n• Col : en-tête de colonne\n• Rowgroup/Colgroup : pour les groupes"],
                ["Quand utiliser les IDs pour les associations ?", "Pour les tableaux complexes où Scope ne suffit pas. Utiliser Headers attribut avec liste d'IDs référençant les cellules d'en-tête."],
                ["Comment tester l'accessibilité d'un tableau ?", "Tests :\n• Navigation avec lecteur d'écran\n• Vérification des associations\n• Test de la navigation au clavier\n• Vérification de la structure logique"],
                ["Quels sont les problèmes courants avec les tableaux ?", "Problèmes :\n• Cellules fusionnées non balisées\n• En-têtes non associés\n• Tableaux de mise en page non marqués\n• Structure hiérarchique incorrecte"],
                ["Comment convertir un tableau complexe en accessible ?", "Étapes :\n1. Analyser la structure logique\n2. Identifier tous les en-têtes\n3. Définir les associations\n4. Baliser proprement\n5. Tester avec lecteur d'écran"],
                ["Qu'est-ce qu'un résumé de tableau ?", "Attribut Summary qui décrit brièvement la structure et le contenu du tableau. Important pour les tableaux complexes."],
                ["Faut-il toujours un résumé ?", "Pour les tableaux complexes : OUI. Pour les simples : optionnel mais recommandé si cela aide à la compréhension."],
                ["Comment baliser les tableaux dans des formulaires ?", "Particulièrement délicat. S'assurer que chaque cellule de formulaire dans un tableau est correctement balisée et associée."],
                ["Quels outils aident au balisage des tableaux ?", "Outils :\n• Fonction de reconnaissance automatique (limités)\n• Éditeurs de balises manuels\n• Plugins spécialisés\n• Scripts de conversion"],
                ["Y a-t-il des alternatives aux tableaux complexes ?", "Oui :\n• Simplifier la structure\n• Diviser en plusieurs tableaux simples\n• Présenter les données différemment (listes, graphiques)\n• Fournir une version alternative"]
            ],
            
            "Forms": [
                ["Qu'est-ce qu'un formulaire accessible ?", "Formulaire dont tous les champs sont :\n• Identifiables (libellé ou info-bulle)\n• Utilisables au clavier\n• Avec messages d'erreur compréhensibles\n• Avec ordre de tabulation logique"],
                ["Pourquoi chaque champ doit-il avoir un nom accessible ?", "Pour que l'utilisateur sache quelle information fournir. Un champ sans nom est une énigme pour un utilisateur non-voyant."],
                ["Qu'est-ce qu'une info-bulle (tooltip) ?", "Propriété accessible d'un champ de formulaire PDF, lue par les lecteurs d'écran. Obligatoire pour chaque champ interactif."],
                ["Pourquoi l'ordre de tabulation est-il important ?", "Car certains utilisateurs naviguent uniquement au clavier. Un ordre illogique rend le formulaire inutilisable."],
                ["Quels problèmes rencontrent les utilisateurs clavier ?", "• Impossible de cliquer (souris inutilisable)\n• Dépendance totale à l'ordre de tabulation\n• Difficulté avec les interactions complexes"],
                ["Pourquoi les formulaires PDF sont plus complexes que le HTML ?", "Car le PDF :\n• Gère moins bien les états et validations\n• A des outils de création limités\n• Requiert un balisage manuel souvent lourd\n• Moins d'outils d'audit spécialisés"],
                ["Comment baliser un champ de formulaire texte ?", "Avec la balise <Form> et les attributs :\n• /TU pour le nom accessible\n• /FF pour les propriétés du champ\n• Éventuellement /E pour les événements"],
                ["Qu'est-ce qu'un champ obligatoire et comment l'indiquer ?", "Champ qui doit être rempli. L'indiquer dans le nom accessible (/TU) et éventuellement avec un astérisque visuel ET textuel."],
                ["Comment gérer les messages d'erreur dans les formulaires PDF ?", "Solutions limitées. Possibilité d'utiliser des scripts JavaScript ou de fournir une page d'erreur séparée accessible."],
                ["Qu'est-ce qu'un groupe de cases à cocher ?", "Plusieurs cases liées sémantiquement. Doivent être regroupées avec un nom commun et chaque option avoir son propre libellé."],
                ["Comment baliser une liste déroulante ?", "Avec <Form> et spécifier les options dans les propriétés. S'assurer que chaque option a un texte accessible."],
                ["Quels sont les types de champs de formulaire PDF ?", "Types :\n• Texte\n• Case à cocher\n• Bouton radio\n• Liste déroulante\n• Bouton d'action\n• Signature numérique"],
                ["Comment rendre un formulaire PDF utilisable sans souris ?", "• Bon ordre de tabulation\n• Raccourcis clavier\n• Indicateurs de focus visibles\n• Navigation logique"],
                ["Qu'est-ce que l'état d'un champ et pourquoi est-ce important ?", "État (coché, désactivé, requis, etc.) doit être communiqué aux technologies d'assistance via les propriétés d'accessibilité."],
                ["Comment tester un formulaire PDF accessible ?", "Tests :\n• Navigation complète au clavier\n• Lecture avec lecteur d'écran\n• Vérification des noms accessibles\n• Test des états et valeurs"],
                ["Quels sont les problèmes courants des formulaires PDF ?", "Problèmes :\n• Champs sans noms accessibles\n• Ordre de tabulation illogique\n• États non communiqués\n• Messages d'erreur inaccessibles"],
                ["Faut-il préférer HTML ou PDF pour les formulaires ?", "HTML est généralement préférable car :\n• Meilleure support d'accessibilité\n• Plus d'outils de validation\n• Meilleure expérience utilisateur\n• Plus facile à maintenir"],
                ["Comment améliorer un formulaire PDF existant ?", "Améliorations :\n• Ajouter des noms accessibles à tous les champs\n• Corriger l'ordre de tabulation\n• Ajouter des indications claires\n• Simplifier si possible"],
                ["Qu'est-ce qu'un formulaire dynamique et ses défis ?", "Formulaire qui change selon les réponses. Défis :\n• Maintien de l'accessibilité pendant les changements\n• Communication des modifications\n• Navigation cohérente"],
                ["Y a-t-il des alternatives aux formulaires PDF ?", "Alternatives :\n• Formulaires HTML accessibles\n• Formulaires Word accessibles (moins pire)\n• Solutions dédiées d'accessibilité\n• Assistance humaine pour remplissage"]
            ],
            
            "Images": [
                ["Quelle est la différence entre image informative et décorative ?", "• Informative : apporte de l'information, doit être balisée en <Figure> avec texte alternatif\n• Décorative : ornementale, doit être mise en artefact"],
                ["Pourquoi les images doivent-elles avoir un texte de remplacement ?", "Pour transmettre l'information visuelle aux utilisateurs non-voyants. Sans texte alternatif, l'image est muette pour un lecteur d'écran."],
                ["Que doit décrire un bon texte de remplacement ?", "Le CONTENU ou la FONCTION de l'image, de manière concise et pertinente. Pas besoin de préciser \"image de...\", directement la description."],
                ["Une image décorative doit-elle être lue ?", "NON. Elle doit être marquée comme artefact pour être ignorée par les lecteurs d'écran."],
                ["Comment décrire une image complexe (graphique, diagramme) ?", "Fournir :\n• Une brève description générale\n• Une description détaillée en texte adjacent\n• Éventuellement un lien vers une description complète"],
                ["Qu'est-ce qu'une image de texte et pourquoi est-ce problématique ?", "Image contenant du texte (scan, capture). Problématique car le texte n'est pas extractible. Solution : OCR ou refaire en vrai texte."],
                ["Comment gérer les images avec du texte intégré ?", "Si le texte est essentiel :\n• Le retranscrire dans l'alternative textuelle\n• Ou mieux : remplacer par du vrai texte stylé\n• Éviter les images de texte quand c'est possible"],
                ["Quand une image est-elle considérée comme décorative ?", "Quand elle :\n• N'apporte pas d'information\n• Est purement esthétique\n• Est une répétition d'information textuelle\n• Ne contribue pas à la compréhension"],
                ["Comment baliser une image avec légende ?", "Utiliser la structure :\n<Figure>\n  <Img> (image)\n  <Caption> (légende)\n</Figure>\nLa légende peut compléter ou remplacer l'alternative textuelle."],
                ["Qu'est-ce qu'une image lien et comment la baliser ?", "Image cliquable. Doit avoir une alternative textuelle qui décrit la destination ou l'action, pas l'image elle-même."],
                ["Comment décrire les images dans les tableaux ?", "Alternative textuelle concise qui s'intègre dans le contexte du tableau. Éviter les descriptions trop longues qui perturbent la navigation."],
                ["Quels sont les formats d'image les plus accessibles ?", "Tous les formats peuvent être accessibles si bien balisés. Éviter les formats propriétaires rares. PNG et JPEG sont standards."],
                ["Comment gérer les images animées ou interactives ?", "Fournir :\n• Une alternative textuelle\n• Des contrôles pour arrêter/pauser\n• Une version statique alternative si nécessaire"],
                ["Qu'est-ce que le contraste des images et pourquoi est-ce important ?", "Différence de luminosité entre l'image et l'arrière-plan. Important pour les malvoyants. Les textes dans les images doivent avoir un bon contraste."],
                ["Comment vérifier l'accessibilité des images ?", "Vérifications :\n• Toutes les images informatives ont une alternative\n• Les images décoratives sont en artefacts\n• Les alternatives sont pertinentes\n• Pas d'images de texte non traitées"],
                ["Quels outils aident à créer des alternatives textuelles ?", "Outils :\n• Éditeurs de balises PDF\n• Plugins de création d'alternatives\n• Services de description d'images\n• Guides de rédaction"],
                ["Comment former à la rédaction d'alternatives textuelles ?", "Formation :\n• Comprendre le contexte d'utilisation\n• Être concis mais complet\n• Décrire la fonction avant l'apparence\n• S'entraîner avec différents types d'images"],
                ["Y a-t-il des images qu'on ne peut pas rendre accessibles ?", "Images trop complexes (cartes détaillées, œuvres d'art abstraites) peuvent nécessiter une description humaine approfondie ou une alternative sous forme de tableau/texture."],
                ["Comment gérer les images dans les documents scannés ?", "Problème majeur. Solutions :\n• OCR de qualité\n• Recréation du document\n• Ajout manuel d'alternatives\n• Fourniture d'une version alternative accessible"],
                ["Qu'est-ce qu'une image SVG dans un PDF et comment la rendre accessible ?", "SVG : format vectoriel. Accessibilité via :\n• Balisage avec <Figure>\n• Alternative textuelle\n• Éventuellement structure interne accessible si le SVG est complexe"]
            ],
            
            "Navigation": [
                ["Pourquoi la navigation est-elle cruciale dans les PDF ?", "Car les PDF sont souvent longs et complexes. Une bonne navigation permet :\n• De trouver rapidement l'information\n• De comprendre la structure\n• D'éviter la fatigue cognitive\n• D'être autonome"],
                ["Quels sont les éléments de navigation essentiels ?", "Éléments :\n• Titres hiérarchisés\n• Table des matières\n• Signets (bookmarks)\n• Liens internes\n• Pagination accessible"],
                ["Qu'est-ce qu'une table des matières accessible ?", "Liste de liens vers les sections principales, générée automatiquement à partir de la structure de titres, navigable au clavier et avec lecteur d'écran."],
                ["Comment créer des signets accessibles ?", "Dans Acrobat :\n• Générer automatiquement à partir des titres\n• Organiser hiérarchiquement\n• Nommer clairement\n• Tester la navigation"],
                ["Pourquoi les liens doivent-ils être explicites ?", "Car les utilisateurs de lecteurs d'écran naviguent souvent par liste de liens. \"Cliquez ici\" ne donne aucune information hors contexte."],
                ["Comment créer des liens internes accessibles ?", "Étapes :\n1. Créer une destination\n2. Créer un lien vers cette destination\n3. Donner un nom explicite au lien\n4. Tester la navigation"],
                ["Qu'est-ce que la pagination accessible ?", "Indication de la page courante et du nombre total de pages, accessible aux technologies d'assistance et navigable."],
                ["Comment naviguer dans un long PDF avec un lecteur d'écran ?", "Techniques :\n• Liste des titres\n• Recherche textuelle\n• Navigation par paragraphes\n• Signets\n• Table des matières"],
                ["Quels sont les problèmes de navigation courants ?", "Problèmes :\n• Pas de structure de titres\n• Liens non explicites\n• Pas de signets\n• Ordre de lecture incorrect\n• Navigation au clavier défectueuse"],
                ["Comment tester la navigation d'un PDF ?", "Tests :\n• Navigation complète au clavier\n• Utilisation avec lecteur d'écran\n• Vérification des liens\n• Test de la table des matières\n• Vérification des signets"],
                ["Qu'est-ce qu'un document à pagination fixe vs fluide ?", "• Fixe : mise en page rigide (typique PDF)\n• Fluide : adaptable (EPUB, HTML)\n• Le PDF fixe nécessite plus d'efforts d'accessibilité"],
                ["Comment améliorer la navigation d'un PDF existant ?", "Améliorations :\n• Ajouter une structure de titres\n• Créer une table des matières\n• Ajouter des signets\n• Corriger l'ordre de lecture\n• Rendre les liens explicites"],
                ["Qu'est-ce que la navigation séquentielle et ses limites ?", "Navigation élément par élément. Limites :\n• Lent pour les longs documents\n• Fatigant\n• Difficile pour retrouver une information"],
                ["Comment les utilisateurs expérimentés naviguent-ils ?", "Ils utilisent :\n• Raccourcis clavier\n• Listes d'éléments (titres, liens, tableaux)\n• Recherche\n• Signets personnalisés"],
                ["Quels outils aident à créer la navigation ?", "Outils :\n• Génération automatique de signets\n• Création de tables des matières\n• Vérification de la structure\n• Tests de navigation"],
                ["Comment gérer la navigation dans les documents multicolonnes ?", "Défi majeur. Solution :\n• Définir un ordre de lecture logique\n• Éviter les sauts de colonnes dans le flux\n• Tester avec lecteur d'écran"],
                ["Qu'est-ce que la navigation non-linéaire ?", "Possibilité d'accéder directement à une section sans parcourir tout le document. Essentielle pour l'accessibilité."],
                ["Comment créer une navigation accessible pour les formulaires ?", "Navigation spécifique :\n• Ordre de tabulation logique\n• Regroupement des champs liés\n• Indications de progression\n• Retour aux erreurs"],
                ["Quels sont les bonnes pratiques pour les noms de liens ?", "Bonnes pratiques :\n• Décrire la destination\n• Être concis mais explicite\n• Éviter les URLs brutes\n• Indiquer l'action si applicable"],
                ["Comment rendre la navigation prévisible ?", "Rendre prévisible par :\n• Structure cohérente\n• Conventions de nommage\n• Comportements attendus\n• Retours d'information clairs"]
            ],
            
            "Validation": [
                ["Qu'est-ce qu'un audit d'accessibilité ?", "Évaluation systématique de la conformité aux normes, combinant vérifications automatiques, manuelles et tests utilisateurs."],
                ["À quoi sert le vérificateur d'accessibilité d'Acrobat ?", "À détecter les erreurs techniques évidentes (balises manquantes, ordre lecture). Utile mais INSUFFISANT seul."],
                ["Pourquoi utiliser PAC 3 ?", "PAC 3 (PDF Accessibility Checker) est plus strict qu'Acrobat, fournit un rapport détaillé conforme PDF/UA, et détecte plus d'erreurs."],
                ["Quelle est la différence entre erreurs et avertissements ?", "• Erreurs : problèmes bloquants (non-conformité)\n• Avertissements : problèmes potentiels à vérifier manuellement"],
                ["Pourquoi un document peut-il passer Acrobat mais échouer PAC ?", "Car Acrobat est moins strict sur certains critères PDF/UA. PAC vérifie plus en profondeur la conformité à la norme."],
                ["Pourquoi les tests humains restent indispensables ?", "Aucun outil automatique ne peut évaluer :\n• Compréhensibilité réelle\n• Fluidité de la navigation\n• Expérience utilisateur globale\n• Contexte sémantique"],
                ["Qu'est-ce qu'un rapport d'accessibilité ?", "Document qui :\n• Liste les problèmes identifiés\n• Classe par criticité\n• Propose des corrections\n• Donne un statut de conformité"],
                ["Comment interpréter les résultats des vérificateurs automatiques ?", "Interprétation :\n• Les erreurs doivent être corrigées\n• Les avertissements doivent être vérifiés manuellement\n• Les succès ne garantissent pas l'accessibilité complète"],
                ["Quels sont les critères de succès WCAG pour les PDF ?", "Critères applicables :\n• 1.1.1 Contenu non-textuel\n• 1.3.1 Information et relations\n• 1.3.2 Ordre significatif\n• 1.4.1 Utilisation de la couleur\n• 2.4.2 Titres de pages\n• 2.4.5 Chemins multiples\n• Etc."],
                ["Comment mesurer le niveau de conformité ?", "Mesure par :\n• Pourcentage de critères WCAG respectés\n• Classification A/AA/AAA\n• Identification des critères échoués\n• Évaluation de la gravité"],
                ["Qu'est-ce qu'un test utilisateur en accessibilité ?", "Test avec des personnes en situation de handicap qui utilisent le document avec leurs technologies d'assistance habituelles."],
                ["Comment recruter des testeurs utilisateurs ?", "Recrutement :\n• Associations de personnes handicapées\n• Services spécialisés\n• Employés concernés\n• Réseaux de testeurs"],
                ["Quels sont les coûts d'un audit d'accessibilité ?", "Coûts variables selon :\n• Complexité du document\n• Niveau de détail demandé\n• Inclusion de tests utilisateurs\n• Expertise requise"],
                ["Comment prioriser les corrections ?", "Priorisation :\n• D'abord les problèmes bloquants\n• Puis les améliorations significatives\n• Enfin les optimisations\n• Basé sur l'impact utilisateur"],
                ["Qu'est-ce qu'une vérification manuelle ?", "Vérification par un expert qui :\n• Examine la structure des balises\n• Teste avec des technologies d'assistance\n• Vérifie la sémantique\n• Évalue l'expérience utilisateur"],
                ["Comment documenter les problèmes d'accessibilité ?", "Documentation :\n• Description précise du problème\n• Localisation dans le document\n• Impact sur les utilisateurs\n• Suggestions de correction"],
                ["Quels sont les outils de vérification gratuits ?", "Outils gratuits :\n• Vérificateur d'Acrobat\n• PAC 3 (gratuit)\n• axe PDF (expérimental)\n• Outils en ligne (limités)"],
                ["Comment vérifier l'accessibilité sans Acrobat Pro ?", "Alternatives :\n• Visionneuses avec fonctionnalités d'accessibilité\n• Outils en ligne\n• Plugins pour d'autres logiciels\n• Vérification manuelle de base"],
                ["Qu'est-ce qu'un échantillon représentatif ?", "Pour les audits de plusieurs documents :\n• Sélection de documents types\n• Couverture des différentes complexités\n• Représentation des usages courants"],
                ["Comment maintenir l'accessibilité dans le temps ?", "Maintenance :\n• Processus de création accessible\n• Vérifications régulières\n• Formation continue\n• Mise à jour selon les nouvelles normes"]
            ],
            
            "Remediation": [
                ["Qu'est-ce que la remédiation PDF ?", "Processus de correction d'un PDF existant pour le rendre accessible. Différent de la création accessible dès l'origine."],
                ["Quelle est la différence entre créer accessible et corriger après coup ?", "• Créer accessible : moins cher, plus efficace, meilleure qualité\n• Corriger après : souvent plus long, plus cher, résultats limités"],
                ["Quelles sont les grandes étapes de la remédiation PDF ?", "1. Diagnostic initial (scan? balisé?)\n2. OCR si nécessaire\n3. Définition titre et langue\n4. Création/validation structure\n5. Balisage contenu\n6. Vérification ordre lecture\n7. Tests lecteur d'écran\n8. Validation finale"],
                ["Pourquoi l'OCR est-il indispensable pour un PDF scanné ?", "Car un scan = IMAGE, pas de texte extractible. L'OCR extrait le texte pour le rendre balisable. Sans OCR, pas d'accessibilité possible."],
                ["Que faut-il vérifier après un OCR ?", "• Qualité de reconnaissance (fautes de lecture)\n• Mise en page préservée\n• Ordre de lecture\n• Images correctement détectées"],
                ["Pourquoi le balisage automatique n'est-il pas suffisant ?", "Il fait des erreurs fréquentes :\n• Mauvais ordre de lecture\n• Fausses détections (tableaux, listes)\n• Hiérarchie titres incorrecte\n• Contenu décoratif non exclu\n• Tableaux mal structurés"],
                ["Pourquoi faut-il enregistrer fréquemment pendant la remédiation ?", "Car Acrobat peut planter, surtout avec des documents complexes. Perdre des heures de travail est fréquent."],
                ["Quels sont les documents les plus difficiles à remédier ?", "Documents difficiles :\n• Scans de mauvaise qualité\n• Mises en page complexes\n• Tableaux imbriqués\n• Documents multilingues\n• Formulaires interactifs"],
                ["Combien de temps prend la remédiation d'un PDF ?", "Temps variable :\n• Simple : 1-2 heures\n• Moyen : 3-8 heures\n• Complexe : plusieurs jours\n• Dépend de la longueur et complexité"],
                ["Quels sont les coûts de remédiation ?", "Coûts :\n• Main d'œuvre experte\n• Logiciels spécialisés\n• Tests utilisateurs\n• Maintenance future\n• Souvent plus cher que création accessible"],
                ["Comment estimer le temps de remédiation ?", "Estimation par :\n• Nombre de pages\n• Complexité de la mise en page\n• Présence d'éléments complexes\n• Qualité initiale du PDF"],
                ["Quelles sont les alternatives à la remédiation PDF ?", "Alternatives :\n• Recréation du document en accessible\n• Version HTML alternative\n• Document Word accessible\n• Assistance humaine pour l'accès"],
                ["Comment traiter les documents très anciens ?", "Traitement des anciens :\n• Numérisation qualité\n• OCR approfondi\n• Correction manuelle importante\n• Éventuellement recréation"],
                ["Qu'est-ce que la remédiation partielle ?", "Correction seulement des problèmes majeurs, acceptant certaines limitations. Compromis entre coût et accessibilité."],
                ["Comment gérer les documents régulièrement mis à jour ?", "Gestion des mises à jour :\n• Template accessible\n• Processus de mise à jour défini\n• Vérifications régulières\n• Formation des contributeurs"],
                ["Quels sont les risques de la remédiation ?", "Risques :\n• Qualité inégale\n• Coûts imprévus\n• Délais non respectés\n• Problèmes résiduels\n• Maintenance difficile"],
                ["Comment assurer la qualité de la remédiation ?", "Assurance qualité :\n• Processus standardisé\n• Vérifications multiples\n• Tests utilisateurs\n• Documentation complète"],
                ["Quels outils professionnels de remédiation existe-t-il ?", "Outils pro :\n• CommonLook PDF\n• axe PDF\n• Equidox\n• Expert PDF Editor\n• Plugins spécialisés"],
                ["Comment former une équipe à la remédiation ?", "Formation :\n• Bases de l'accessibilité\n• Outils spécifiques\n• Bonnes pratiques\n• Cas pratiques\n• Veille continue"],
                ["Quand faut-il abandonner la remédiation ?", "Abandonner quand :\n• Le document est trop complexe\n• Les coûts sont prohibitifs\n• La qualité ne peut être garantie\n• Une alternative est plus efficace"]
            ],
            
            "Tools": [
                ["Quels sont les principaux outils pour créer des PDF accessibles ?", "Outils principaux :\n• Adobe Acrobat Pro (standard)\n• Microsoft Word (création source)\n• Adobe InDesign (publications)\n• LibreOffice (gratuit)\n• Outils spécialisés (CommonLook, axe)"],
                ["Comment utiliser Word pour créer des PDF accessibles ?", "Dans Word :\n• Utiliser les styles de titres\n• Ajouter des alternatives aux images\n• Créer des tableaux avec en-têtes\n• Vérifier l'accessibilité\n• Exporter en PDF avec options d'accessibilité"],
                ["Qu'est-ce qu'Adobe Acrobat Pro et pourquoi est-ce essentiel ?", "Acrobat Pro :\n• Standard industriel pour PDF\n• Outils complets de balisage\n• Vérificateur d'accessibilité\n• Fonctionnalités de remédiation\n• Support de PDF/UA"],
                ["Existe-t-il des alternatives gratuites à Acrobat Pro ?", "Alternatives gratuites :\n• LibreOffice (création)\n• PDF24 Creator (basique)\n• Outils en ligne (limités)\n• Visionneuses avec fonctionnalités étendues\n• Mais moins complets qu'Acrobat Pro"],
                ["Qu'est-ce que PAC 3 et comment l'utiliser ?", "PAC 3 (PDF Accessibility Checker) :\n• Outil gratuit de vérification approfondie\n• Conforme à PDF/UA\n• Rapport détaillé\n• Installation simple\n• Complément essentiel d'Acrobat"],
                ["Comment utiliser le vérificateur d'accessibilité d'Acrobat ?", "Dans Acrobat :\n• Outils > Accessibilité\n• Vérifier l'accessibilité\n• Examiner le rapport\n• Corriger les problèmes identifiés\n• Re-vérifier"],
                ["Quels sont les outils de lecture d'écran pour tester ?", "Lecteurs d'écran :\n• NVDA (gratuit, Windows)\n• JAWS (payant, standard)\n• VoiceOver (Mac/iOS intégré)\n• Narrator (Windows intégré)\n• TalkBack (Android)"],
                ["Comment vérifier le contraste des couleurs ?", "Outils de contraste :\n• Colour Contrast Analyser (gratuit)\n• WebAIM Contrast Checker (en ligne)\n• Outils intégrés aux navigateurs\n• Plugins pour design tools"],
                ["Quels outils pour l'OCR de qualité ?", "Outils OCR :\n• Abbyy FineReader (excellent)\n• Adobe Acrobat OCR\n• Tesseract (gratuit)\n• Services en ligne\n• Scanner professionnels avec OCR"],
                ["Comment automatiser le balisage des PDF ?", "Automatisation limitée avec :\n• Balisage automatique d'Acrobat\n• Scripts et actions\n• Outils spécialisés (CommonLook)\n• Services de traitement par lot\n• Mais toujours besoin de correction manuelle"],
                ["Quels sont les outils pour les tableaux complexes ?", "Outils pour tableaux :\n• Éditeur de balises d'Acrobat\n• Plugins spécialisés\n• Scripts de conversion\n• Outils de reconnaissance de structure\n• Reconstruction manuelle souvent nécessaire"],
                ["Comment vérifier l'ordre de lecture ?", "Vérification ordre :\n• Panneau ordre de lecture d'Acrobat\n• Navigation avec lecteur d'écran\n• Export du texte\n• Outils de visualisation de flux"],
                ["Quels outils pour les formulaires PDF ?", "Outils formulaires :\n• Éditeur de formulaires d'Acrobat\n• Adobe LiveCycle Designer (avancé)\n• Outils spécialisés accessibilité\n• Création dans Word puis conversion"],
                ["Comment gérer les documents multilingues ?", "Outils multilingues :\n• Vérification des attributs Lang\n• Dictionnaires OCR multilingues\n• Outils de détection de langue\n• Correcteurs orthographiques adaptés"],
                ["Quels sont les outils collaboratifs pour l'accessibilité ?", "Collaboration :\n• Plateformes de review avec annotations\n• Suivi des corrections\n• Documentation partagée\n• Workflows intégrés"],
                ["Comment tester sur mobile ?", "Tests mobile :\n• Visionneuses PDF mobiles\n• Lecteurs d'écran mobiles (VoiceOver, TalkBack)\n• Applications de test d'accessibilité\n• Simulation de différents écrans"],
                ["Quels sont les outils de reporting ?", "Reporting :\n• PAC 3 rapports détaillés\n• Acrobat rapports d'accessibilité\n• Outils de dashboard\n• Intégration avec systèmes de gestion"],
                ["Comment monitorer l'accessibilité dans le temps ?", "Monitoring :\n• Vérifications régulières\n• Outils de comparaison\n• Historique des corrections\n• Alertes sur nouveaux documents"],
                ["Quels sont les outils émergents en accessibilité PDF ?", "Émergents :\n• IA pour le balisage automatique\n• Outils cloud collaboratifs\n• Intégration avec les CMS\n• Analytics d'usage accessible"],
                ["Comment choisir ses outils ?", "Choix d'outils selon :\n• Budget\n• Volume de documents\n• Complexité des besoins\n• Compétences de l'équipe\n• Intégration avec l'existant"]
            ],
            
            "BestPractices": [
                ["Quelles sont les bonnes pratiques pour créer des PDF accessibles ?", "Bonnes pratiques :\n1. Créer accessible dès la source (Word, InDesign)\n2. Utiliser les styles sémantiques\n3. Structurer logiquement\n4. Décrire toutes les images\n5. Tester régulièrement\n6. Former les créateurs"],
                ["Comment structurer un document pour l'accessibilité ?", "Structure :\n• Titre principal (H1)\n• Titres de sections (H2, H3...)\n• Paragraphes organisés\n• Listes pour les énumérations\n• Tableaux pour les données relationnelles\n• Liens explicites"],
                ["Quelle est la hiérarchie de titres recommandée ?", "Hiérarchie :\n• H1 : titre du document (un seul)\n• H2 : sections principales\n• H3 : sous-sections\n• H4+ si nécessaire\n• Pas de saut de niveau\n• Cohérence dans tout le document"],
                ["Comment rédiger de bonnes alternatives textuelles ?", "Alternatives :\n• Concises mais complètes\n• Décrivent le contenu ou la fonction\n• Contextuelles\n• Éviter \"image de...\"\n• Pour les graphiques : description des tendances"],
                ["Quelles sont les erreurs courantes à éviter ?", "Erreurs courantes :\n• Images sans alternative\n• Titres visuels seulement\n• Tableaux de mise en page\n• Ordre de lecture illogique\n• Liens \"cliquez ici\"\n• Formulaires sans noms"],
                ["Comment gérer les documents longs ?", "Documents longs :\n• Table des matières\n• Signets\n• Pagination accessible\n• Résumés des sections\n• Navigation facilitée"],
                ["Quelles sont les pratiques pour les tableaux ?", "Tableaux :\n• En-têtes clairement identifiés\n• Associations correctes\n• Éviter les fusions complexes\n• Résumé pour les tableaux complexes\n• Alternative pour les tableaux de données"],
                ["Comment rendre les formulaires utilisables ?", "Formulaires :\n• Noms accessibles pour tous les champs\n• Ordre de tabulation logique\n• Indication des champs obligatoires\n• Messages d'erreur clairs\n• Instructions compréhensibles"],
                ["Quelles sont les pratiques pour les couleurs et contrastes ?", "Couleurs :\n• Contraste suffisant (4.5:1 pour texte normal)\n• Ne pas utiliser la couleur seule pour l'information\n• Vérifier avec des simulateurs de daltonisme\n• Considérer les impressions noir/blanc"],
                ["Comment gérer les documents multilingues ?", "Multilingues :\n• Indiquer la langue principale\n• Marquer les changements de langue\n• Considérer les spécificités de chaque langue\n• Tester avec synthèses vocales appropriées"],
                ["Quelles sont les pratiques pour les mathématiques et formules ?", "Mathématiques :\n• Utiliser MathML si possible\n• Alternative textuelle détaillée\n• Éviter les images de formules\n• Notation accessible\n• Test avec lecteurs d'écran spécialisés"],
                ["Comment optimiser pour la lecture mobile ?", "Mobile :\n• Taille de police adaptative\n• Mise en page responsive si possible\n• Navigation simplifiée\n• Téléchargement optimisé\n• Test sur différents appareils"],
                ["Quelles sont les pratiques de test ?", "Tests :\n• Automatiques + manuels\n• Avec vraies technologies d'assistance\n• Par des utilisateurs en situation de handicap\n• Réguliers et documentés\n• Couvrant différents scénarios"],
                ["Comment documenter l'accessibilité ?", "Documentation :\n• Déclaration d'accessibilité\n• Notes techniques\n• Historique des corrections\n• Procédures de création\n• Formation des équipes"],
                ["Quelles sont les pratiques pour les mises à jour ?", "Mises à jour :\n• Maintenir la structure existante\n• Vérifier l'accessibilité après modifications\n• Documenter les changements\n• Former les nouveaux contributeurs"],
                ["Comment gérer les documents hérités ?", "Documents hérités :\n• Inventaire et priorisation\n• Remédiation progressive\n• Alternatives temporaires\n• Plan de migration\n• Recréation si nécessaire"],
                ["Quelles sont les pratiques collaboratives ?", "Collaboration :\n• Rôles et responsabilités clairs\n• Checklists partagées\n• Révisions croisées\n• Partage des bonnes pratiques\n• Formation continue"],
                ["Comment intégrer l'accessibilité dans les workflows ?", "Intégration :\n• Dès la conception\n• À chaque étape de création\n• Dans les validations\n• Dans la publication\n• Dans la maintenance"],
                ["Quelles sont les métriques de suivi ?", "Métriques :\n• Temps de correction\n• Taux de conformité\n• Retours utilisateurs\n• Coûts d'accessibilité\n• Satisfaction des utilisateurs handicapés"],
                ["Comment rester à jour avec les évolutions ?", "Veille :\n• Suivre les mises à jour des normes\n• Participer aux communautés\n• Former régulièrement\n• Tester les nouveaux outils\n• Échanger avec les utilisateurs"]
            ],
            
            "Advanced": [
                ["Qu'est-ce que le balisage sémantique avancé ?", "Balisage qui va au-delà des bases :\n• Relations structurelles complexes\n• Métadonnées riches\n• Navigation experte\n• Personnalisation pour différents besoins\n• Intégration avec d'autres formats"],
                ["Comment gérer les documents avec plusieurs colonnes ?", "Gestion multicolonnes :\n• Définir un ordre de lecture logique (colonne par colonne)\n• Éviter les sauts dans le flux\n• Tester avec lecteur d'écran\n• Considérer une version linéarisée alternative"],
                ["Qu'est-ce que la linéarisation et pourquoi est-ce important ?", "Linéarisation : conversion d'une mise en page complexe en flux linéaire. Important pour :\n• Lecteurs d'écran\n• Affichages mobiles\n• Réorganisation du contenu\n• Accessibilité cognitive"],
                ["Comment baliser les documents avec superposition d'éléments ?", "Superpositions :\n• Définir l'ordre z dans les balises\n• S'assurer que l'ordre logique correspond à l'ordre de lecture\n• Tester les interactions\n• Éviter les superpositions non nécessaires"],
                ["Quels sont les défis des PDF interactifs ?", "Défis interactifs :\n• États dynamiques\n• Scripts JavaScript\n• Animations\n• Contenu conditionnel\n• Synchronisation multimédia"],
                ["Comment rendre accessible un PDF avec du multimédia ?", "Multimédia :\n• Sous-titres pour vidéo\n• Transcription pour audio\n• Description audio pour vidéo\n• Contrôles accessibles\n• Alternatives textuelles"],
                ["Qu'est-ce que l'accessibilité des documents 3D/VR ?", "Accessibilité des contenus 3D :\n• Description textuelle\n• Navigation alternative\n• Contrôles adaptés\n• Compatibilité avec les technologies d'assistance\n• Standards émergents"],
                ["Comment gérer les documents avec reconnaissance de formes ?", "Formes et schémas :\n• Description de la structure\n• Ordre de lecture des éléments\n• Relations entre les composants\n• Alternative textuelle globale"],
                ["Quels sont les standards émergents pour l'accessibilité PDF ?", "Émergents :\n• PDF/UA-2 en préparation\n• Intégration avec EPUB Accessibility\n• Standards pour le balisage sémantique riche\n• Protocoles pour l'accessibilité dynamique"],
                ["Comment automatiser les tests d'accessibilité à grande échelle ?", "Automatisation :\n• Scripts de vérification par lot\n• Intégration avec les systèmes de gestion documentaire\n• Analytics d'accessibilité\n• Alertes automatisées\n• Dashboards de suivi"],
                ["Qu'est-ce que l'accessibilité contextuelle ?", "Adaptation selon :\n• Environnement d'utilisation\n• Capacités de l'utilisateur\n• Dispositif utilisé\n• Préférences personnelles\n• Contexte culturel"],
                ["Comment gérer les documents avec sécurité avancée ?", "Sécurité et accessibilité :\n• DRM compatible avec les technologies d'assistance\n• Authentification accessible\n• Chiffrement qui préserve l'accessibilité\n• Contrôles d'accès adaptés"],
                ["Quels sont les défis du PDF dans les applications mobiles ?", "Défis mobiles :\n• Performances\n• Compatibilité des visionneuses\n• Navigation sur petit écran\n• Interactions tactiles\n• Connexion intermittente"],
                ["Comment intégrer l'accessibilité dans les workflows CI/CD ?", "Intégration CI/CD :\n• Tests automatiques dans les pipelines\n• Validation pré-publication\n• Monitoring continu\n• Corrections automatisées quand possible"],
                ["Qu'est-ce que l'accessibilité proactive vs réactive ?", "• Proactive : conception accessible dès le début\n• Réactive : corrections après création\n• La proactive est plus efficace et moins coûteuse"],
                ["Comment mesurer l'impact économique de l'accessibilité ?", "Mesure économique :\n• ROI de l'accessibilité\n• Coûts évités (litiges, retravailler)\n• Marché élargi\n• Productivité améliorée\n• Image de marque"],
                ["Quels sont les défis du PDF pour l'apprentissage machine ?", "Défis ML :\n• Extraction de contenu structuré\n• Reconnaissance de la sémantique\n• Traitement des variations de qualité\n• Intégration avec les modèles de langage"],
                ["Comment l'accessibilité PDF interagit avec les autres formats ?", "Interactions :\n• Conversion depuis/vers HTML\n• Intégration avec EPUB\n• Compatibilité avec les CMS\n• Workflows multi-formats"],
                ["Qu'est-ce que l'accessibilité tout au long du cycle de vie ?", "Cycle de vie :\n• Conception\n• Création\n• Validation\n• Publication\n• Maintenance\n• Archivage"],
                ["Comment anticiper les futures exigences d'accessibilité ?", "Anticipation :\n• Veille normative\n• Tests des nouvelles technologies\n• Formation continue\n• Design flexible\n• Architecture évolutive"]
            ]
        },

        // ==================== PROFILS PROFESSIONNELS ====================
        "ProfessionalProfiles": {
            "AnelloIannuzzi": [
                ["Qui est M.Anello Iannuzzi ?", "M.Anello Iannuzzi est un entrepreneur et dirigeant d'entreprise français, né en avril 1969 (55 ans en 2024). Il est actuellement président de deux sociétés de services : EURO INFORMATION DIRECT SERVICES (EIDS) et EURO TELE SERVICES. Il évolue principalement dans les secteurs des services administratifs, du soutien aux entreprises et des services financiers."],
                ["D'où vient M.Anello Iannuzzi ?", "M.Anello Iannuzzi est français. Ses principales sociétés sont basées à Strasbourg, mais il a également été actif à Annecy dans le passé."],
                ["Quel est le parcours professionnel d'M.Anello Iannuzzi ?", "Son parcours montre une évolution du secteur financier vers les services administratifs :\n• 2016-2020 : Dirigeant de GENEVE COURTAGES SARL (services financiers et assurance)\n• Depuis 2016 : Président d'EIDS (services administratifs)\n• Depuis 2024 : Président d'EURO TELE SERVICES (services administratifs)"],
                ["Quelle est la date de naissance d'M.Anello Iannuzzi ?", "M.Anello Iannuzzi est né en avril 1969."],
                ["Quelle est la profession principale d'M.Anello Iannuzzi ?", "Il est dirigeant d'entreprise, spécialisé dans les activités administratives, le soutien aux entreprises et les services financiers."],
                ["Dans quelles sociétés M.Anello Iannuzzi est-il actuellement président ?", "Il est président de EURO INFORMATION DIRECT SERVICES (SAS) depuis le 22 novembre 2016 et de EURO TELE SERVICES (SAS) depuis le 2 octobre 2024."],
                ["Quelle société a été dirigée par M.Anello Iannuzzi dans le passé ?", "Il a été dirigeant de GENEVE COURTAGES SARL entre 2016 et 2020, une société active dans les services financiers et l'assurance."],
                ["Quel âge a M.Anello Iannuzzi ?", "Né en avril 1969, M.Anello Iannuzzi a 55 ans en 2024."],
                ["Quelle est la formation d'M.Anello Iannuzzi ?", "Les informations sur sa formation précise ne sont pas publiquement disponibles, mais son parcours suggère une expertise en gestion d'entreprise et services financiers."],
                ["M.Anello Iannuzzi est-il marié ?", "Les informations sur sa vie personnelle ne sont pas publiquement disponibles pour respecter sa vie privée."],
                ["Quel est le style de management d'M.Anello Iannuzzi ?", "Basé sur son parcours entrepreneurial et ses responsabilités dans des sociétés de services, on peut supposer un style orienté résultats et développement d'entreprise."],
                ["M.Anello Iannuzzi a-t-il reçu des distinctions ?", "Aucune information publique sur des distinctions spécifiques n'est disponible actuellement."],
                ["Quels sont les secteurs d'activité d'M.Anello Iannuzzi ?", "Secteurs :\n• Services administratifs aux entreprises\n• Soutien aux entreprises\n• Services financiers et assurance\n• Business Process Outsourcing (BPO)"],
                ["M.Anello Iannuzzi est-il actif sur les réseaux sociaux ?", "Sa présence sur les réseaux sociaux professionnels n'est pas documentée publiquement."],
                ["Quelle est la vision d'entreprise d'M.Anello Iannuzzi ?", "Sa vision semble orientée vers le développement des services externalisés et l'expansion des activités de soutien administratif, notamment dans le secteur bancaire."],
                ["M.Anello Iannuzzi a-t-il des associés connus ?", "Les informations sur ses éventuels associés ne sont pas publiquement disponibles."],
                ["Quelle est la taille des entreprises dirigées par M.Anello Iannuzzi ?", "Entreprises de taille moyenne :\n• EIDS : 50-99 salariés\n• EURO TELE SERVICES : 250-499 salariés\n• Chiffres d'affaires de l'ordre de 20-25 millions d'euros"],
                ["M.Anello Iannuzzi intervient-il dans des conférences ou événements ?", "Aucune information publique sur des interventions n'est disponible actuellement."],
                ["Quelle est la stratégie de croissance d'M.Anello Iannuzzi ?", "Stratégie apparente : développement dans les services administratifs externalisés, notamment pour le secteur bancaire, et potentiellement expansion géographique."],
                ["M.Anello Iannuzzi a-t-il des projets connus ?", "Les projets spécifiques ne sont pas documentés publiquement, mais sa récente prise de présidence chez EURO TELE SERVICES suggère des projets de développement."]
            ],
            
            "OlfaKaramosly": [
                ["Qui est Mme.Olfa Karamosly ?", "Mme.Olfa Karamosly est la Directrice d'Euro Information Direct Services (EIDS)."],
                ["Quel est le rôle d'Mme.Olfa Karamosly au sein d'EIDS ?", "Elle occupe un rôle de direction ou de management, avec des responsabilités d'encadrement et de coordination des équipes d'EIDS en Tunisie et au Maroc."],
                ["Pourquoi Mme.Olfa Karamosly a-t-elle été mentionnée publiquement ?", "Elle a été citée et remerciée dans un post LinkedIn pour son engagement envers les équipes d'EIDS Tunisie et Maroc lors d'une visite du président du groupe, M.Anello Iannuzzi."],
                ["Que suggère le post LinkedIn concernant les compétences d'Mme.Olfa Karamosly ?", "Il suggère qu'elle a un rôle managérial et opérationnel, avec un accompagnement constant des équipes."],
                ["Quelles informations manquent sur Mme.Olfa Karamosly ?", "Il n'y a pas de biographie publique détaillée (parcours académique, expériences antérieures) ni d'articles de presse ou de profil LinkedIn accessible sans compte confirmant son historique."],
                ["Mme.Olfa Karamosly est-elle basée en Tunisie ?", "Son rôle de coordination des équipes en Tunisie et au Maroc suggère une base opérationnelle dans cette région, possiblement en Tunisie."],
                ["Quel est le niveau de responsabilité d'Mme.Olfa Karamosly ?", "En tant que Directrice, elle a des responsabilités stratégiques et opérationnelles importantes au sein d'EIDS, particulièrement pour les activités en Afrique du Nord."],
                ["Depuis quand Mme.Olfa Karamosly travaille-t-elle chez EIDS ?", "La durée exacte de son mandat n'est pas précisée publiquement."],
                ["Mme.Olfa Karamosly a-t-elle une formation spécifique ?", "Les détails de sa formation ne sont pas disponibles publiquement."],
                ["Quelles sont les réalisations connues d'Mme.Olfa Karamosly ?", "Son implication dans le développement et la coordination des équipes d'EIDS en Tunisie et au Maroc est sa principale réalisation documentée."],
                ["Mme.Olfa Karamosly gère-t-elle combien de personnes ?", "Elle coordonne les équipes d'EIDS en Tunisie et au Maroc, mais le nombre exact n'est pas précisé publiquement."],
                ["Quel est le style de management d'Mme.Olfa Karamosly ?", "Basé sur les mentions publiques, elle semble avoir un style d'accompagnement et de soutien aux équipes."],
                ["Mme.Olfa Karamosly parle-t-elle plusieurs langues ?", "Probablement, étant donné son rôle international impliquant la France, la Tunisie et le Maroc."],
                ["Quels sont les défis principaux d'Mme.Olfa Karamosly ?", "Coordination d'équipes dans différents pays, gestion des différences culturelles, et alignement avec la stratégie du groupe."],
                ["Mme.Olfa Karamosly a-t-elle des responsabilités opérationnelles ?", "Oui, son rôle implique très probablement des responsabilités opérationnelles directes."],
                ["Comment Mme.Olfa Karamosly contribue-t-elle à la stratégie d'EIDS ?", "Par son management des activités en Afrique du Nord, elle contribue à l'expansion internationale et opérationnelle d'EIDS."],
                ["Mme.Olfa Karamosly est-elle impliquée dans le recrutement ?", "Très probablement, étant donné son rôle de direction des équipes."],
                ["Quelle est la relation entre Mme.Olfa Karamosly et M.Anello Iannuzzi ?", "Relation hiérarchique : elle reporte très probablement à M.Anello Iannuzzi en tant que président d'EIDS."],
                ["Mme.Olfa Karamosly participe-t-elle à des événements professionnels ?", "Aucune information publique n'est disponible à ce sujet."],
                ["Quel est l'avenir professionnel potentiel d'Mme.Olfa Karamosly ?", "Potentiellement une évolution vers des responsabilités encore plus étendues au sein du groupe, compte tenu de son rôle stratégique actuel."]
            ],
            
            "EIDS": [
                ["Quelle est l'activité principale d'EURO INFORMATION DIRECT SERVICES (EIDS) ?", "EIDS opère dans le soutien administratif aux entreprises. C'est une société de Business Process Outsourcing (BPO) qui fournit des services externalisés, principalement pour le groupe Crédit Mutuel Alliance Fédérale."],
                ["Quel est l'effectif d'EIDS en 2022 ?", "L'effectif était compris entre 50 et 99 salariés en 2022."],
                ["Quel a été le chiffre d'affaires d'EIDS en 2023 ?", "Le chiffre d'affaires s'élevait à environ 21,3 millions d'euros en 2023."],
                ["Quel a été le résultat net d'EIDS en 2023 ?", "Le résultat net était d'environ 1,09 million d'euros en 2023."],
                ["À quel grand groupe bancaire appartient EIDS ?", "EIDS appartient au groupe Crédit Mutuel Alliance Fédérale."],
                ["Où se trouve le siège social d'EIDS ?", "Le siège social est à Strasbourg, France."],
                ["Depuis quand EIDS existe-t-elle ?", "EIDS existe depuis au moins 2016, date à laquelle M.Anello Iannuzzi en est devenu président."],
                ["Quels services exactement propose EIDS ?", "Services de Business Process Outsourcing (BPO) :\n• Gestion administrative\n• Traitement de données\n• Support back-office\n• Services externalisés pour le secteur bancaire"],
                ["EIDS a-t-elle des filiales à l'étranger ?", "Oui, EIDS a des équipes en Tunisie et au Maroc, coordonnées par Mme.Olfa Karamosly."],
                ["Quelle est la stratégie de croissance d'EIDS ?", "Stratégie probable :\n• Développement des services externalisés\n• Expansion géographique (Afrique du Nord)\n• Diversification des services\n• Renforcement des partenariats avec le groupe Crédit Mutuel"],
                ["EIDS est-elle rentable ?", "Oui, avec un résultat net positif de 1,09 million d'euros en 2023, EIDS est rentable."],
                ["Quels sont les principaux clients d'EIDS ?", "Principalement le groupe Crédit Mutuel Alliance Fédérale, mais potentiellement d'autres clients dans le secteur des services."],
                ["Comment EIDS se positionne-t-elle sur le marché ?", "Comme un prestataire de services externalisés spécialisé, notamment pour le secteur bancaire."],
                ["EIDS a-t-elle des certifications ?", "Les certifications spécifiques ne sont pas documentées publiquement, mais une entreprise de ce type pourrait avoir des certifications qualité (ISO 9001) et sécurité des données."],
                ["Quelle est la culture d'entreprise d'EIDS ?", "Culture probablement orientée service, qualité et efficacité, caractéristique des entreprises de BPO."],
                ["EIDS recrute-t-elle actuellement ?", "Les informations de recrutement ne sont pas disponibles publiquement, mais une entreprise en croissance pourrait recruter régulièrement."],
                ["Quels sont les défis d'EIDS ?", "Défis probables :\n• Concurrence dans le BPO\n• Gestion des équipes internationales\n• Évolution technologique\n• Satisfaction client élevée"],
                ["EIDS investit-elle dans l'innovation ?", "Probablement dans l'automatisation et les technologies de traitement pour améliorer l'efficacité de ses services."],
                ["Quelle est la vision à long terme d'EIDS ?", "Devenir un acteur majeur dans les services externalisés, notamment pour le secteur financier, avec une présence internationale renforcée."],
                ["Comment contacter EIDS ?", "Les coordonnées officielles ne sont pas fournies ici pour respecter la vie privée, mais peuvent être trouvées via les registres commerciaux officiels."]
            ],
            
            "EuroTeleServices": [
                ["Quelle est l'activité d'EURO TELE SERVICES ?", "EURO TELE SERVICES est active dans le soutien administratif aux entreprises, similaire à EIDS."],
                ["Quel est l'effectif d'EURO TELE SERVICES en 2022 ?", "L'effectif était compris entre 250 et 499 salariés en 2022."],
                ["Quel a été le chiffre d'affaires d'EURO TELE SERVICES en 2023 ?", "Le chiffre d'affaires s'élevait à environ 25,3 millions d'euros en 2023."],
                ["Quel a été le résultat net d'EURO TELE SERVICES en 2023 ?", "Le résultat net était d'environ 849 000 euros en 2023."],
                ["Depuis quand M.Anello Iannuzzi est-il président d'EURO TELE SERVICES ?", "Depuis le 2 octobre 2024, ce qui est une nomination très récente."],
                ["EURO TELE SERVICES est-elle plus grande qu'EIDS ?", "En termes d'effectif : OUI (250-499 vs 50-99 salariés)\nEn chiffre d'affaires : légèrement supérieur (25,3M vs 21,3M€)\nEn résultat net : légèrement inférieur (849k vs 1,09M€)"],
                ["Où se trouve le siège d'EURO TELE SERVICES ?", "Probablement à Strasbourg comme EIDS, mais cette information devrait être vérifiée dans les registres officiels."],
                ["EURO TELE SERVICES et EIDS sont-elles liées ?", "Elles sont liées par leur président commun (M.Anello Iannuzzi) et leur secteur d'activité similaire, mais ce sont des entités juridiques distinctes."],
                ["Quelle est la stratégie pour EURO TELE SERVICES ?", "Stratégie probable sous la nouvelle présidence :\n• Développement des activités\n• Synergies potentielles avec EIDS\n• Optimisation de la rentabilité\n• Expansion des services"],
                ["EURO TELE SERVICES est-elle rentable ?", "Oui, avec un résultat net positif de 849 000 euros en 2023."],
                ["Quels sont les services exacts d'EURO TELE SERVICES ?", "Services de soutien administratif aux entreprises, probablement incluant des services téléphoniques ou de centre d'appels étant donné le nom \"TELE SERVICES\"."],
                ["EURO TELE SERVICES a-t-elle des activités internationales ?", "Les informations sur une éventuelle présence internationale ne sont pas disponibles publiquement."],
                ["Comment EURO TELE SERVICES se différencie-t-elle d'EIDS ?", "Différences possibles :\n• Clientèle différente\n• Services spécifiques\n• Taille plus importante\n• Historique et culture d'entreprise distincts"],
                ["Quels sont les défis d'EURO TELE SERVICES ?", "Défis similaires à EIDS : concurrence, gestion des coûts, satisfaction client, adaptation technologique."],
                ["EURO TELE SERVICES a-t-elle des projets de développement ?", "Sous la nouvelle présidence d'M.Anello Iannuzzi, des projets de développement sont probables mais non spécifiés publiquement."],
                ["Quelle est la relation entre EURO TELE SERVICES et le groupe Crédit Mutuel ?", "Non spécifiée. Contrairement à EIDS, il n'est pas mentionné qu'EURO TELE SERVICES appartienne au groupe Crédit Mutuel."],
                ["EURO TELE SERVICES existe-t-elle depuis longtemps ?", "La date de création n'est pas précisée, mais sa taille suggère une existence plus longue qu'EIDS."],
                ["Comment la nomination d'M.Anello Iannuzzi affectera-t-elle EURO TELE SERVICES ?", "Elle pourrait apporter :\n• Une nouvelle dynamique de croissance\n• Des synergies avec EIDS\n• Une expertise en développement d'entreprise\n• Une orientation stratégique renouvelée"],
                ["EURO TELE SERVICES a-t-elle des certifications ?", "Non spécifié, mais probablement des certifications similaires aux entreprises du secteur."],
                ["Quelle est la vision pour EURO TELE SERVICES ?", "Vision probable : renforcer sa position sur le marché des services administratifs externalisés et développer de nouvelles opportunités sous la direction d'M.Anello Iannuzzi."]
            ],
            
            "BusinessContext": [
                ["Quel est le profil professionnel général d'M.Anello Iannuzzi ?", "C'est un entrepreneur et dirigeant français actif principalement dans les services administratifs, le support aux entreprises et le secteur financier. Il occupe des postes de président dans plusieurs sociétés basées à Strasbourg."],
                ["Où se trouvent les sociétés dont M.Anello Iannuzzi est président ?", "Ses principales sociétés sont basées à Strasbourg. Il a également été actif à Annecy par le passé."],
                ["M.Anello Iannuzzi est-il plutôt un dirigeant salarié ou un entrepreneur ?", "Il est décrit à la fois comme un dirigeant et un entrepreneur, ce qui suggère qu'il est impliqué dans la création et/ou la propriété de ses entreprises."],
                ["Les entreprises d'M.Anello Iannuzzi sont-elles rentables ?", "Oui, les deux principales sociétés (EIDS et EURO TELE SERVICES) affichent des résultats nets positifs en 2023, indiquant une rentabilité."],
                ["M.Anello Iannuzzi a-t-il une dimension internationale ?", "Oui, indirectement à travers les activités d'EIDS en Tunisie et au Maroc via ses filiales, et par l'ancienne société GENEVE COURTAGES qui opérait dans les services financiers souvent transfrontaliers."],
                ["Quel est le secteur des services administratifs aux entreprises ?", "Secteur en croissance qui comprend :\n• Externalisation de processus métier (BPO)\n• Services de soutien administratif\n• Gestion back-office\n• Centres de services partagés"],
                ["Pourquoi les entreprises externalisent-elles leurs services administratifs ?", "Raisons :\n• Réduction des coûts\n• Accès à des compétences spécialisées\n• Flexibilité\n• Concentration sur le cœur de métier\n• Amélioration de la qualité"],
                ["Quelle est la taille du marché du BPO en France ?", "Marché de plusieurs milliards d'euros, en croissance constante avec la digitalisation et la recherche d'efficacité."],
                ["Quels sont les défis du secteur des services administratifs ?", "Défis :\n• Concurrence intense\n• Évolution technologique rapide\n• Exigences de qualité croissantes\n• Gestion des coûts\n• Attraction et rétention des talents"],
                ["Comment les sociétés comme EIDS créent-elles de la valeur ?", "Création de valeur par :\n• Efficacité opérationnelle\n• Expertise sectorielle\n• Technologie\n• Qualité de service\n• Relation client durable"],
                ["Quelle est l'importance du secteur bancaire comme client ?", "Le secteur bancaire est un client important car :\n• Besoins administratifs complexes\n• Volumes importants\n• Exigences réglementaires strictes\n• Potentiel de long terme"],
                ["Comment les dirigeants comme M.Anello Iannuzzi réussissent-ils ?", "Facteurs de réussite :\n• Vision stratégique\n• Compétences en gestion\n• Réseau professionnel\n• Adaptabilité\n• Capacité à développer les équipes"],
                ["Quelle est la tendance pour l'externalisation des services ?", "Tendance à la hausse avec :\n• Digitalisation accélérée\n• Recherche d'efficacité post-Covid\n• Focus sur les compétences clés\n• Globalisation des services"],
                ["Comment évaluer la performance d'entreprises comme EIDS ?", "Indicateurs :\n• Croissance du chiffre d'affaires\n• Rentabilité\n• Taux de rétention clients\n• Satisfaction employés\n• Innovation et adaptation"],
                ["Quels sont les risques du modèle d'affaires d'EIDS ?", "Risques :\n• Dépendance à quelques grands clients\n• Concurrence sur les prix\n• Évolution technologique disruptive\n• Risques géopolitiques pour les opérations internationales"],
                ["Comment les entreprises de services évoluent-elles avec la technologie ?", "Évolution vers :\n• Automatisation et RPA\n• Intelligence artificielle\n• Plateformes cloud\n• Analytics avancés\n• Services plus intelligents et prédictifs"],
                ["Quelle est la place de la France dans le BPO européen ?", "La France est un marché important mais face à la concurrence des pays à coûts plus bas. La qualité et la spécialisation sont des atouts compétitifs."],
                ["Comment les dirigeants gèrent-ils plusieurs entreprises simultanément ?", "Gestion par :\n• Délégation efficace\n• Systèmes de reporting\n• Vision stratégique commune\n• Synergies entre les entités\n• Équipes de direction compétentes"],
                ["Quels sont les facteurs de croissance pour EIDS et EURO TELE SERVICES ?", "Facteurs :\n• Expansion des services existants\n• Nouveaux clients\n• Développement géographique\n• Nouvelles offres de services\n• Acquisitions potentielles"],
                ["Comment le leadership d'M.Anello Iannuzzi influence-t-il ces entreprises ?", "Influence probable sur :\n• Orientation stratégique\n• Culture d'entreprise\n• Relations clients\n• Développement des équipes\n• Performance financière"]
            ]
        },

        // ==================== TECHNIQUE ET SUPPORT ====================
        "Technical": {
            "Software": [
                ["Quel logiciel utiliser pour créer des PDF accessibles ?", "Logiciels recommandés :\n• Microsoft Word (avec export PDF accessible)\n• Adobe InDesign (pour les publications complexes)\n• Adobe Acrobat Pro (pour le balisage et vérification)\n• LibreOffice (alternative gratuite)\n• Outils spécialisés (CommonLook, axe PDF)"],
                ["Comment configurer Word pour produire des PDF accessibles ?", "Configuration Word :\n1. Utiliser les styles (Titre 1, Titre 2...)\n2. Ajouter un titre au document\n3. Définir la langue\n4. Ajouter des textes alternatifs aux images\n5. Utiliser l'export \"PDF accessible\""],
                ["Quelles sont les fonctionnalités d'accessibilité d'Acrobat Pro ?", "Fonctionnalités :\n• Vérificateur d'accessibilité\n• Éditeur de balises\n• Outil de lecture à voix haute\n• Correction d'ordre de lecture\n• Gestion des formulaires\n• OCR intégré"],
                ["Existe-t-il des outils gratuits pour l'accessibilité PDF ?", "Outils gratuits :\n• PAC 3 (vérification)\n• NVDA (lecteur d'écran)\n• LibreOffice (création)\n• PDF24 Creator (basique)\n• Outils en ligne (limités)"],
                ["Comment utiliser PAC 3 ?", "Utilisation PAC 3 :\n1. Télécharger et installer\n2. Ouvrir le PDF à vérifier\n3. Lancer la vérification\n4. Analyser le rapport\n5. Corriger les problèmes identifiés\n6. Re-vérifier"],
                ["Quels sont les plugins utiles pour Acrobat ?", "Plugins :\n• CommonLook PDF Validator\n• axe PDF\n• Plugins de productivité\n• Outils de batch processing\n• Extensions spécifiques à l'accessibilité"],
                ["Comment automatiser les tâches d'accessibilité ?", "Automatisation avec :\n• Actions Acrobat\n• Scripts JavaScript\n• Outils en ligne de commande\n• APIs de traitement\n• Solutions professionnelles"],
                ["Quels outils pour les tableaux complexes ?", "Outils spécialisés :\n• Éditeurs de balises avancés\n• Outils de reconnaissance de structure\n• Plugins pour tableaux\n• Solutions de conversion"],
                ["Comment vérifier l'accessibilité sur mobile ?", "Vérification mobile :\n• Visionneuses PDF mobiles\n• Lecteurs d'écran mobiles (VoiceOver, TalkBack)\n• Applications de test\n• Simulation d'environnements"],
                ["Quels sont les outils d'OCR recommandés ?", "OCR recommandés :\n• Abbyy FineReader (excellente qualité)\n• Adobe Acrobat OCR\n• Tesseract (gratuit, open source)\n• Solutions cloud (Google, Azure)"],
                ["Comment gérer les documents en batch ?", "Batch processing avec :\n• Actions Acrobat par lot\n• Outils professionnels (CommonLook)\n• Scripts personnalisés\n• Solutions serveur"],
                ["Quels outils pour les formulaires accessibles ?", "Outils formulaires :\n• Adobe Acrobat Forms\n• Adobe LiveCycle Designer\n• Outils spécialisés accessibilité\n• Création dans Word puis conversion"],
                ["Comment mesurer les performances d'accessibilité ?", "Mesure avec :\n• Outils de reporting (PAC, Acrobat)\n• Dashboards personnalisés\n• Métriques de conformité\n• Analytics d'utilisation"],
                ["Quels sont les outils collaboratifs ?", "Collaboration :\n• Plateformes de review (Adobe Review)\n• Systèmes de ticketing intégrés\n• Documentation partagée\n• Workflows d'approbation"],
                ["Comment intégrer avec les CMS ?", "Intégration CMS :\n• Plugins pour WordPress, Drupal\n• APIs pour systèmes personnalisés\n• Workflows de publication\n• Validation pré-publication"],
                ["Quels outils pour la formation ?", "Formation :\n• Guides interactifs\n• Simulations\n• Vidéos tutoriels\n• Exercices pratiques\n• Évaluations"],
                ["Comment monitorer en temps réel ?", "Monitoring :\n• Outils de surveillance continue\n• Alertes automatiques\n• Rapports réguliers\n• Tableaux de bord temps réel"],
                ["Quels sont les outils d'analyse de contraste ?", "Analyse contraste :\n• Colour Contrast Analyser\n• WebAIM Contrast Checker\n• Extensions navigateur\n• Outils intégrés aux logiciels de design"],
                ["Comment tester avec différents lecteurs d'écran ?", "Tests multi-lecteurs :\n• NVDA (Windows)\n• JAWS (Windows)\n• VoiceOver (Mac)\n• Narrator (Windows)\n• TalkBack (Android)"],
                ["Quels sont les outils émergents ?", "Émergents :\n• IA pour balisage automatique\n• Solutions cloud complètes\n• Outils de test automatisés avancés\n• Plateformes collaboratives intégrées"]
            ],
            
            "Troubleshooting": [
                ["Pourquoi Acrobat ne détecte pas les balises ?", "Causes possibles :\n• PDF non balisé à l'origine\n• Problème de version d'Acrobat\n• Corruption du fichier\n• Paramètres incorrects\n• Try: Réparer le PDF ou rebaliser"],
                ["Comment corriger un ordre de lecture incorrect ?", "Correction :\n1. Ouvrir le panneau Ordre de lecture\n2. Réorganiser les éléments\n3. Tester avec lecteur d'écran\n4. Vérifier la cohérence logique\n5. Sauvegarder et re-tester"],
                ["Que faire si les images n'ont pas d'alternatives ?", "Solution :\n1. Identifier images informatives\n2. Ajouter texte alternatif\n3. Marquer images décoratives comme artefacts\n4. Tester avec lecteur d'écran\n5. Vérifier la pertinence des descriptions"],
                ["Comment résoudre les problèmes de formulaires ?", "Résolution :\n• Ajouter noms accessibles (/TU) à tous les champs\n• Vérifier ordre de tabulation\n• Tester avec lecteur d'écran\n• S'assurer que les états sont corrects\n• Vérifier la compatibilité avec différentes visionneuses"],
                ["Pourquoi le lecteur d'écran ne lit pas certaines parties ?", "Causes :\n• Contenu non balisé\n• Balises orphelines\n• Problème d'ordre de lecture\n• Images sans alternatives\n• Contenu en artefacts par erreur"],
                ["Comment réparer un PDF corrompu ?", "Réparation :\n1. Essayer Réparer dans Acrobat\n2. Ré-exporter depuis le source\n3. Utiliser des outils de réparation\n4. Convertir en autre format et revenir\n5. Reconstruire si nécessaire"],
                ["Que faire si l'OCR échoue ?", "Solutions :\n• Améliorer la qualité du scan original\n• Essayer un autre logiciel OCR\n• Corriger manuellement les erreurs\n• Segmenter le document\n• Consulter un spécialiste"],
                ["Comment gérer les problèmes de performance ?", "Optimisation :\n• Réduire la taille du PDF\n• Optimiser les images\n• Simplifier la structure\n• Segmenter les longs documents\n• Utiliser des paramètres optimisés"],
                ["Pourquoi les tableaux ne sont-ils pas accessibles ?", "Causes :\n• Structure de balisage incorrecte\n• En-têtes non associés\n• Cellules fusionnées mal gérées\n• Tableau de mise en page non marqué\n• Solution : Rebaliser correctement"],
                ["Comment résoudre les problèmes de langue ?", "Résolution :\n• Définir la langue principale du document\n• Marquer les changements de langue\n• Utiliser les attributs Lang appropriés\n• Tester avec synthèses vocales multilingues"],
                ["Que faire si le vérificateur donne des faux positifs ?", "Gestion :\n• Comprendre chaque avertissement\n• Vérifier manuellement\n• Documenter les exceptions justifiées\n• Utiliser plusieurs outils de vérification\n• Consulter des experts"],
                ["Comment déboguer les problèmes de navigation ?", "Débogage :\n• Tester avec différents lecteurs d'écran\n• Vérifier la structure des titres\n• Tester les liens\n• Vérifier l'ordre de tabulation\n• Analyser les retours utilisateurs"],
                ["Pourquoi le PDF n'est-il pas accessible sur mobile ?", "Causes :\n• Visionneuse PDF incompatible\n• Problèmes de mise en page fixe\n• Performances insuffisantes\n• Fonctionnalités non supportées\n• Solution : Optimiser pour mobile"],
                ["Comment gérer les documents avec DRM ?", "Gestion DRM :\n• S'assurer que le DRM permet l'accessibilité\n• Fournir des versions alternatives\n• Travailler avec l'éditeur\n• Utiliser des solutions compatibles"],
                ["Que faire en cas de plantage d'Acrobat ?", "Solutions :\n• Mettre à jour Acrobat\n• Réparer l'installation\n• Réduire la complexité du document\n• Travailler par sections\n• Utiliser un autre poste ou version"],
                ["Comment résoudre les problèmes d'export depuis Word ?", "Résolution :\n• Vérifier les paramètres d'export PDF\n• Optimiser le document Word source\n• Tester différents paramètres\n• Utiliser des modèles accessibles\n• Mettre à jour Office"],
                ["Pourquoi les couleurs ne sont-elles pas accessibles ?", "Causes :\n• Contraste insuffisant\n• Utilisation de la couleur seule\n• Problèmes de daltonisme non considérés\n• Solution : Vérifier avec des outils de contraste et corriger"],
                ["Comment gérer les documents très anciens ?", "Gestion :\n• Évaluer la nécessité de les rendre accessibles\n• Considérer la recréation complète\n• Utiliser des techniques de remédiation avancées\n• Fournir des alternatives"],
                ["Que faire si le client demande l'impossible ?", "Gestion des attentes :\n• Expliquer les limitations techniques\n• Proposer des alternatives\n• Donner des estimations réalistes\n• Éduquer sur l'accessibilité\n• Prioriser les améliorations"],
                ["Comment obtenir de l'aide professionnelle ?", "Aide :\n• Consulter des experts en accessibilité\n• Rejoindre des communautés professionnelles\n• Suivre des formations certifiantes\n• Engager des consultants spécialisés\n• Participer à des groupes de travail"]
            ]
        }
    },

    "Synonyms": [
        // ==================== SYNONYMES CONVERSATIONS ====================
        ["bonjour", "hello", "salut", "bonsoir", "coucou", "hey", "hi", "bon matin", "bon après-midi", "salutations", "hola", "ciao", "good day", "welcome", "greetings", "bonjour à tous", "bonjour à vous", "hello there", "salut à tous", "bonjour cher assistant"],
        ["cava", "comment ça va", "ça va", "comment vas-tu", "tu vas bien", "comment allez-vous", "cv", "ça roule", "how are you", "how's it going", "tout va bien", "ça marche", "you good", "what's up", "comment tu te portes", "comment allez vous", "comment vas-tu aujourd'hui"],
        ["merci", "merci beaucoup", "thanks", "thank you", "gracias", "danke", "grazie", "merci bien", "c'est gentil", "je vous remercie", "je te remercie", "merci infiniment", "un grand merci", "merci à toi", "merci à vous", "thanks a lot", "thank you very much", "many thanks"],
        ["ok", "d'accord", "okay", "entendu", "compris", "roger that", "ça marche", "pas de souci", "très bien", "parfait", "excellent", "noté", "c'est noté", "je comprends", "c'est compris", "okidoki", "dacodac", "ça roule"],
        ["a plus", "à plus tard", "see you", "à bientôt", "ciao", "à la prochaine", "salut", "bye", "goodbye", "au revoir", "à demain", "bye bye", "take care", "bonne journée", "bonne soirée", "bonne nuit", "à tout à l'heure", "je te laisse", "je dois y aller"],
        ["aide", "help", "au secours", "je besoin d'aide", "assistance", "support", "peux-tu m'aider", "tu peux m'aider", "aide moi", "help me", "je suis perdu", "je ne comprends pas", "je suis bloqué", "j'ai un problème", "j'ai besoin d'assistance", "peux tu m'assister", "pourrais-tu m'aider"],
        ["t'es qui", "qui es-tu", "who are you", "présente toi", "ton identité", "c'est qui pixels", "tu t'appelles comment", "qui est tu", "tu es qui", "dis moi qui tu es", "quel est ton nom", "raconte moi qui tu es", "qui est derrière toi", "ton créateur", "who created you", "what are you"],
        ["quoi de neuf", "quoi de beau", "what's new", "des nouvelles", "quoi de neuf aujourd'hui", "des infos", "quoi de frais", "quoi de neuf dans le monde", "les dernières nouvelles", "what's happening", "what's going on", "quoi de neuf chez toi", "des nouveautés", "du nouveau"],

        // ==================== SYNONYMES ACCESSIBILITÉ PDF ====================
        // Fondamentaux
        ["Qu'est-ce que l'accessibilité numérique ?", "définition accessibilité numérique", "accessibilité numérique définition", "c'est quoi accessibilité numérique", "définir accessibilité numérique", "accessibilité numérique explication", "que signifie accessibilité numérique", "accessibilité numérique sens", "définition de l'accessibilité numérique", "explication accessibilité numérique", "accessibilité numérique qu'est-ce que c'est", "définissez l'accessibilité numérique"],
        ["Pourquoi l'accessibilité numérique est-elle devenue un enjeu majeur ?", "importance accessibilité numérique", "enjeu accessibilité", "pourquoi l'accessibilité est importante", "accessibilité numérique enjeu majeur", "signification accessibilité numérique", "raisons accessibilité numérique", "pourquoi se soucier d'accessibilité", "l'accessibilité pourquoi", "l'accessibilité est-elle importante", "enjeux majeurs accessibilité", "accessibilité numérique pourquoi"],
        
        // Normes
        ["Qu'est-ce que les WCAG ?", "wcag définition", "définition wcag", "c'est quoi wcag", "wcag explication", "web content accessibility guidelines", "que sont les wcag", "wcag c'est quoi", "signification wcag", "wcag signification", "définir wcag", "wcag en français", "explication des wcag"],
        ["Qu'est-ce que la norme PDF/UA ?", "pdf/ua définition", "norme pdf/ua", "c'est quoi pdf/ua", "pdf/ua explication", "iso 14289", "que signifie pdf/ua", "pdf/ua c'est quoi", "pdf ua définition", "norme pdf ua", "pdf universal accessibility", "pdf/ua norme"],
        
        // Technologies d'assistance
        ["Qu'est-ce qu'un lecteur d'écran ?", "lecteur d'écran définition", "définition lecteur écran", "c'est quoi lecteur écran", "screen reader définition", "lecteur écran explication", "que fait un lecteur d'écran", "comment fonctionne un lecteur d'écran", "définir lecteur d'écran", "explication lecteur d'écran", "à quoi sert un lecteur d'écran", "lecteur d'écran c'est quoi"],
        
        // Structure
        ["Qu'est-ce qu'un PDF balisé ?", "pdf balisé définition", "définition pdf balisé", "c'est quoi pdf balisé", "pdf balisé explication", "pdf tagué définition", "pdf avec balises", "pdf structuré", "pdf balisé c'est quoi", "définir pdf balisé", "explication pdf balisé", "pdf avec balisage"],
        
        // Éléments
        ["Pourquoi les titres doivent-ils être hiérarchisés ?", "hiérarchie titres importance", "titres hiérarchisés pourquoi", "importance hiérarchie titres", "structure titres accessibilité", "pourquoi structurer les titres", "hiérarchie des titres pourquoi", "titres hiérarchiques importance", "pourquoi hiérarchiser les titres", "l'importance des titres hiérarchisés", "hiérarchisation des titres"],
        
        // Tableaux
        ["Pourquoi les tableaux sont-ils difficiles à rendre accessibles ?", "tableaux difficiles accessibilité", "complexité tableaux accessibles", "tableaux problèmes accessibilité", "tableaux défis accessibilité", "tableaux accessibilité difficultés", "pourquoi les tableaux sont complexes", "tableaux accessibilité complexité", "difficultés tableaux accessibles", "tableaux challenges accessibilité"],
        
        // Formulaires
        ["Qu'est-ce qu'une info-bulle (tooltip) ?", "info-bulle définition", "c'est quoi tooltip pdf", "info-bulle accessibilité", "tooltip formulaire pdf", "définition tooltip", "explication info-bulle", "tooltip c'est quoi", "info bulle accessibilité", "tooltip dans pdf"],

        // ==================== SYNONYMES PROFILS PROFESSIONNELS ====================
        ["Qui est M.Anello Iannuzzi ?", "M.Anello Iannuzzi qui est-ce", "présentation M.Anello Iannuzzi", "c'est qui M.Anello Iannuzzi", "biographie M.Anello Iannuzzi", "profil M.Anello Iannuzzi", "M.Anello Iannuzzi dirigeant", "M.Anello Iannuzzi entrepreneur", "qui est Monsieur Iannuzzi", "M.Anello Iannuzzi info", "qui est M.Anello", "Iannuzzi qui", "président EIDS qui", "dirigeant français Iannuzzi", "M. Iannuzzi qui est-ce", "biographie Iannuzzi"],
        ["Qui est Mme.Olfa Karamosly ?", "Olfa Karamosly qui", "Mme Karamosly qui est-ce", "directrice EIDS", "Olfa Karamosly biographie", "Karamosly qui", "Mme Olfa Karamosly présentation", "qui est Madame Karamosly", "Olfa Karamosly rôle", "directrice EIDS Tunisie", "Olfa Karamosly profil"],
        ["Quelle est l'activité principale d'EIDS ?", "EIDS activité", "EURO INFORMATION DIRECT SERVICES activité", "que fait EIDS", "secteur d'activité EIDS", "EIDS services", "EIDS métier", "activités EIDS", "EIDS que fait cette société", "entreprise EIDS activité"],

        // ==================== SYNONYMES TECHNIQUES ====================
        ["Comment créer un PDF accessible ?", "faire un pdf accessible", "créer pdf accessible étapes", "réaliser pdf accessible", "produire pdf accessible", "comment rendre un pdf accessible", "étapes création pdf accessible", "méthode pdf accessible", "processus création pdf accessible", "comment faire un pdf accessible"],
        ["Quels outils pour l'accessibilité PDF ?", "logiciels accessibilité pdf", "outils pour pdf accessible", "software accessibilité pdf", "programmes accessibilité pdf", "applications pour pdf accessible", "outils pour rendre pdf accessible", "logiciels pour pdf accessible", "outils d'accessibilité pdf"]
    ],

    "Extensions": [
        // Préfixes user-friendly (50+ options)
        [
            "Salut ! ",
            "Bonjour ! ",
            "Hey ! ",
            "Coucou ! ",
            "Hello ! ",
            "Bonsoir ! ",
            "Bon matin ! ",
            "Hola ! ",
            "Ciao ! ",
            "Yo ! ",
            "Wesh ! ",
            "👋 ",
            "🤖 ",
            "🎯 ",
            "💡 ",
            "✨ ",
            "🌟 ",
            "🚀 ",
            "🔥 ",
            "👍 ",
            "✅ ",
            "📚 ",
            "💼 ",
            "🎓 ",
            "🔧 ",
            "⚙️ ",
            "📊 ",
            "🔍 ",
            "🧠 ",
            "🤝 ",
            "🙏 ",
            "😊 ",
            "😎 ",
            "🤓 ",
            "🎭 "
        ],
        
        // Ponctuation variée (100+ options)
        [
            "",
            ".",
            "!",
            "...",
            " ?",
            " !",
            "!!",
            "?!",
            ".",
            " 👌",
            " ✅",
            " 🎯",
            " 💪",
            " 😊",
            " 👍",
            " 🤓",
            " 🚀",
            " 🌟",
            " ✨",
            " 💡",
            " 🎓",
            " 🔧",
            " ⚙️",
            " 📊",
            " 🔍",
            " 🧠",
            " 🤝",
            " 🙏",
            " 😎"
        ],
        
        // Suffixes user-friendly (50+ options)
        [
            "",
            " !",
            ".",
            "...",
            " 😊",
            " 👍",
            " 👌",
            " ✅",
            " 🎯",
            " 💪",
            " 🚀",
            " 🌟",
            " ✨",
            " 💡",
            " 🎓",
            " 🔧",
            " ⚙️",
            " 📊",
            " 🔍",
            " 🧠",
            " 🤝",
            " 🙏",
            " 😎"
        ]
    ],

    "Temp": []
};

// Fonction de statistiques détaillées
function showDetailedStats() {
    console.log("🚀 sample-data.js BOOSTÉ chargé avec succès !");
    console.log("=".repeat(60));
    
    let totalQuestions = 0;
    let totalSubCategories = 0;
    
    for (const mainCategory in sampleData.DataSet) {
        const mainCatName = sampleData.Categories[mainCategory]?.name || mainCategory;
        console.log(`\n📂 CATÉGORIE: ${mainCatName}`);
        console.log(`📝 Description: ${sampleData.Categories[mainCategory]?.description || "Non spécifiée"}`);
        
        const subCategories = sampleData.DataSet[mainCategory];
        let categoryQuestions = 0;
        
        for (const subCategory in subCategories) {
            const questions = subCategories[subCategory];
            const subCatName = sampleData.Categories[mainCategory]?.subCategories?.[subCategory] || subCategory;
            console.log(`  ├─ 📁 ${subCatName}: ${questions.length} questions`);
            categoryQuestions += questions.length;
            totalSubCategories++;
        }
        
        console.log(`  └─ 📊 TOTAL ${mainCatName}: ${categoryQuestions} questions`);
        totalQuestions += categoryQuestions;
    }
    
    console.log("\n" + "=".repeat(60));
    console.log("📈 STATISTIQUES GLOBALES:");
    console.log(`├─ Questions totales: ${totalQuestions}`);
    console.log(`├─ Catégories principales: ${Object.keys(sampleData.DataSet).length}`);
    console.log(`├─ Sous-catégories: ${totalSubCategories}`);
    console.log(`├─ Synonymes: ${sampleData.Synonyms.length} groupes`);
    console.log(`├─ Préfixes: ${sampleData.Extensions[0].length} options`);
    console.log(`├─ Ponctuations: ${sampleData.Extensions[1].length} options`);
    console.log(`└─ Suffixes: ${sampleData.Extensions[2].length} options`);
    console.log("=".repeat(60));
    
    // Afficher quelques exemples par catégorie
    console.log("\n🎯 EXEMPLES PAR CATÉGORIE:");
    for (const mainCategory in sampleData.DataSet) {
        const mainCatName = sampleData.Categories[mainCategory]?.name || mainCategory;
        const firstSubCat = Object.keys(sampleData.DataSet[mainCategory])[0];
        const firstQuestion = sampleData.DataSet[mainCategory][firstSubCat][0];
        
        if (firstQuestion) {
            console.log(`📌 ${mainCatName}: "${firstQuestion[0].substring(0, 50)}..."`);
        }
    }
}

// Exécuter les statistiques au chargement
showDetailedStats();

// Export pour Node.js si nécessaire
if (typeof module !== 'undefined' && module.exports) {
    module.exports = sampleData;
}