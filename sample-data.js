// sample-data.js - MUST be in same folder as index.html
const sampleData = {
    "DataSet": [
        // ==================== CONVERSATIONS CASUAL ====================
        [
            "hey",
            "👋 Hey ! Je suis Pixels, ton assistant en accessibilité PDF. Prêt à répondre à tes questions sur le balisage PDF ou les infos pros !"
        ],
        [
            "yo",
            "😎 Yo ! C'est Pixels à l'appareil. Tu cherches des infos sur les PDF accessibles, M.Anello Iannuzzi ou Mme.Olfa Karamosly ?"
        ],
        [
            "coucou",
            "👋 Coucou ! Bienvenue dans l'assistant Pixels. Je peux t'aider avec :\n• Le balisage PDF\n• Les infos sur M.Anello Iannuzzi\n• Tout sur Mme.Olfa Karamosly et EIDS"
        ],
        [
            "bon matin",
            "🌞 Bon matin ! Excellente journée pour apprendre sur l'accessibilité PDF. Que puis-je faire pour toi aujourd'hui ?"
        ],
        [
            "bonsoir",
            "🌙 Bonsoir ! Même le soir, je suis là pour répondre à tes questions sur le balisage PDF et les infos professionnelles."
        ],
        [
            "hey pixel",
            "🤖 Hey ! Pixels présent et prêt. Demande-moi n'importe quoi sur :\n✅ Balisage PDF\n✅ M.Anello Iannuzzi\n✅ Mme.Olfa Karamosly\n✅ Accessibilité numérique"
        ],
        [
            "salut l'ami",
            "👋 Salut l'ami ! Content de te voir. Je suis ton pote Pixels, spécialiste PDF et infos pros. Comment puis-je t'aider ?"
        ],
        [
            "hello there",
            "🌟 Hello there ! Pixels à ton service. Je parle français et accessibilité PDF. Quelle est ta question ?"
        ],
        [
            "wesh",
            "😄 Wesh ! Pixels dans la place. Tu veux des infos sur les PDF balisés ou sur les dirigeants d'entreprise ?"
        ],
        [
            "ça gaze",
            "🔥 Ça gaze ! Tout roule de mon côté. Et toi, tu as besoin d'infos sur l'accessibilité PDF ou les pros ?"
        ],
        [
            "quoi de neuf",
            "🚀 Quoi de neuf ? De mon côté, je suis prêt à répondre à toutes tes questions sur :\n• Balisage PDF\n• M.Anello Iannuzzi\n• Mme.Olfa Karamosly\n• Accessibilité numérique"
        ],
        [
            "comment tu vas",
            "😊 Je vais super bien, merci ! Toujours motivé pour aider avec l'accessibilité PDF. Et toi, tu as une question précise ?"
        ],
        [
            "tu bosses sur quoi",
            "💼 Je bosse sur l'accessibilité PDF et les infos pros ! Spécialisé en :\n🔸 Balisage PDF\n🔸 Profils d'entrepreneurs\n🔸 Conformité accessibilité\n🔸 Infos entreprises"
        ],
        [
            "t'es qui",
            "🤖 Je suis Pixels, ton assistant IA spécialisé en :\n🎯 Accessibilité PDF\n🎯 Infos sur M.Anello Iannuzzi\n🎯 Données sur Mme.Olfa Karamosly\n🎯 Tout ce qui concerne EIDS"
        ],
        [
            "présente-toi",
            "🌟 Enchanté ! Je suis Pixels, ton assistant dédié à :\n📄 L'accessibilité et balisage PDF\n👔 Les profils professionnels (M.Anello Iannuzzi, Mme.Olfa Karamosly)\n🏢 Les infos entreprises (EIDS, EURO TELE SERVICES)\n🔍 La conformité numérique"
        ],
        [
            "tu fais quoi",
            "⚙️ Je fais de l'assistance intelligente ! Concrètement :\n• Je réponds aux questions sur le balisage PDF\n• Je donne des infos sur les dirigeants d'entreprise\n• J'explique l'accessibilité numérique\n• Je partage des bonnes pratiques"
        ],
        [
            "merci",
            "🙏 De rien ! C'était un plaisir de t'aider. N'hésite pas si tu as d'autres questions sur le PDF, M.Anello Iannuzzi ou autre chose !"
        ],
        [
            "merci beaucoup",
            "💖 Merci beaucoup à toi ! Ravie d'avoir pu t'aider. Reviens quand tu veux pour plus d'infos sur l'accessibilité PDF ou les profils pros !"
        ],
        [
            "thanks",
            "👍 You're welcome ! Happy to help with PDF accessibility or professional info. Don't hesitate to ask more!"
        ],
        [
            "ok",
            "👌 OK ! Si tu as d'autres questions plus tard, je suis là. N'oublie pas : je connais bien le balisage PDF et les infos sur M.Anello Iannuzzi !"
        ],
        [
            "d'accord",
            "✅ D'accord ! Au cas où : je suis expert en accessibilité PDF et infos sur les dirigeants d'EIDS. À bientôt !"
        ],
        [
            "a plus",
            "👋 À plus ! Passe une bonne journée. Reviens pour plus de tips sur l'accessibilité PDF !"
        ],
        [
            "bye",
            "😊 Bye ! Bonne continuation. Rappelle : je sais tout sur le balisage PDF et M.Anello Iannuzzi !"
        ],
        [
            "au revoir",
            "🌟 Au revoir ! Ce fut un plaisir de t'assister. Pour rappel, je suis spécialisé en accessibilité PDF et infos professionnelles."
        ],
        [
            "ciao",
            "🇮🇹 Ciao ! À la prochaine. N'oublie pas que je peux t'aider avec le balisage PDF et les infos sur EIDS !"
        ],

        // ==================== PDF BALISAGE ====================
        [
            "Qu'est-ce que le balisage d'un PDF ?",
            "Le balisage consiste à ajouter des étiquettes sémantiques invisibles (balises) à chaque élément d'un PDF (titres, paragraphes, tableaux, images) pour que les technologies d'assistance comme les lecteurs d'écran puissent interpréter et naviguer correctement dans la structure du document."
        ],
        [
            "Pourquoi le balisage est-il obligatoire pour l'accessibilité numérique ?",
            "Le balisage est obligatoire car il rend le PDF accessible aux personnes en situation de handicap, notamment les utilisateurs de lecteurs d'écran. Il permet de comprendre la structure, de naviguer par titres, de décrire les images et de comprendre les tableaux de données."
        ],
        [
            "Le balisage a-t-il un impact sur l'apparence visuelle du document ?",
            "Non. Les balises sont des métadonnées invisibles. Elles n'affectent pas la présentation visuelle du document."
        ],
        [
            "Qu'est-ce que la racine de balises (Tags Root) ?",
            "C'est le conteneur principal de l'arborescence de balises. Dans Acrobat Pro, il faut la créer manuellement via le menu d'options du panneau \"Balises\" > \"Créer une racine de balises\" pour un document non balisé."
        ],
        [
            "Qu'est-ce qu'un artefact et quand doit-on l'utiliser ?",
            "Les artefacts sont des éléments décoratifs ou non porteurs d'information (numéros de page décoratifs, fonds graphiques, images purement décoratives) qui doivent être ignorés par les technologies d'assistance. Ils doivent être marqués comme artefact pour être exclus du flux de lecture."
        ],
        [
            "Quelle est la différence entre contenu informatif et contenu décoratif ?",
            "Le contenu informatif doit être balisé (titres, paragraphes, images informatives, tableaux). Le contenu décoratif doit être mis en artefact pour être ignoré par les lecteurs d'écran."
        ],
        [
            "Quelle balise utiliser pour le titre principal du document ?",
            "La balise Titre : <H>. Elle ne doit être utilisée qu'une seule fois par document."
        ],
        [
            "Quelle balise utiliser pour un titre de section ?",
            "Les balises de Titre de niveau 1 à 6 : <H1> à <H6>. Elles doivent être utilisées dans une hiérarchie logique et imbriquée."
        ],
        [
            "Quelle balise utiliser pour un paragraphe ?",
            "La balise Paragraphe : <P>."
        ],
        [
            "Quelle balise utiliser pour une image informative ?",
            "La balise Figure : <Figure>. Vous DEVEZ lui ajouter un texte de remplacement (alternative textuelle) dans ses propriétés."
        ],
        [
            "Où ajoute-t-on le texte de remplacement (alternative textuelle) ?",
            "Clic droit sur la balise <Figure> dans le panneau Balises > \"Propriétés\". Saisir la description dans le champ \"Texte de remplacement\" de l'onglet \"Balise\"."
        ],
        [
            "Que se passe-t-il si un contenu n'est pas inclus dans l'arborescence de balises ?",
            "Il reste visuellement sur la page mais n'est plus accessible aux lecteurs d'écran. Il apparaîtra comme une erreur (\"non contenu dans la structure\")."
        ],
        [
            "Quelle est l'exigence fondamentale de la norme PDF/UA concernant le balisage ?",
            "Que TOUT le contenu significatif soit contenu dans l'arborescence de balises (le \"tags tree\")."
        ],

        // ==================== ORDRE DE LECTURE ====================
        [
            "Qu'est-ce que l'ordre de lecture logique ?",
            "C'est l'ordre séquentiel et logique dans lequel un lecteur d'écran lit le contenu d'une page. Il est défini par l'ordre des balises dans le panneau \"Balises\" et non par la disposition visuelle."
        ],
        [
            "En quoi l'ordre de lecture est-il différent de l'ordre visuel ?",
            "L'ordre visuel est l'empilement des éléments (z-order). L'ordre de lecture est l'ordre logique de lecture, qui peut être différent, surtout dans les mises en page complexes (colonnes, encadrés)."
        ],
        [
            "Pourquoi le panneau Ordre ne doit-il pas être utilisé pour corriger l'ordre de lecture ?",
            "Il fusionne l'ordre d'empilement visuel et l'ordre de lecture logique. Déplacer des éléments ici peut modifier involontairement la superposition visuelle et corrompre l'arborescence des balises."
        ],
        [
            "Quel panneau permet de corriger réellement l'ordre de lecture ?",
            "Le panneau \"Balises\". Il faut réorganiser les balises dans l'arborescence pour suivre l'ordre logique de lecture."
        ],
        [
            "Comment vérifier l'ordre de lecture d'un document ?",
            "Utiliser la fonction \"Exporter vers le texte (accessible)\" (Fichier > Exporter vers > Texte (accessible)). Cela génère un fichier texte montrant l'ordre de lecture tel qu'un lecteur d'écran le lirait."
        ],
        [
            "Comment corriger un document en multi-colonnes ?",
            "Il faut réorganiser manuellement les balises dans le panneau \"Balises\" pour que le contenu soit lu dans un ordre linéaire logique (colonne par colonne ou ligne par ligne selon le sens de lecture)."
        ],
        [
            "Que faire lorsqu'un paragraphe est coupé sur deux pages ?",
            "Baliser le texte sur la première page et saisir le texte COMPLET du paragraphe comme son \"Texte de remplacement\". Marquer la portion de texte sur la deuxième page comme un artefact."
        ],
        [
            "Quel est le lien entre ordre de lecture et redistribution (reflow) ?",
            "Un bon ordre de lecture garantit une redistribution cohérente. Le contenu doit être balisé dans l'ordre logique pour que la redistribution sur mobile ou au zoom soit lisible."
        ],
        [
            "Quelle règle PDF/UA concerne l'ordre de lecture ?",
            "L'ordre de lecture logique dans l'arborescence de balises doit représenter correctement la séquence de lecture prévue du contenu du document."
        ],

        // ==================== TABLEAUX ====================
        [
            "Quelles sont les balises obligatoires d'un tableau de données ?",
            "<Table> (conteneur), <TR> (Rangée/ligne), <TH> (Cellule d'en-tête), <TD> (Cellule de données)."
        ],
        [
            "Quelle est la première étape pour baliser un tableau ?",
            "Utiliser l'outil \"Ordre de lecture\", sélectionner visuellement tout le tableau, puis cliquer sur le bouton \"Tableau\". Acrobat génère souvent automatiquement la structure."
        ],
        [
            "Pourquoi faut-il associer les en-têtes (<TH>) aux cellules de données (<TD>) ?",
            "Pour que les lecteurs d'écran annoncent correctement les en-têtes lors de la navigation dans le tableau. Sans association, la structure sémantique est perdue."
        ],
        [
            "Quelle différence entre tableau simple et tableau complexe ?",
            "Un tableau simple a des en-têtes sur une seule ligne ou colonne. Un tableau complexe a des en-têtes fusionnés, imbriqués, ou situés au milieu des données, nécessitant une association par ID."
        ],
        [
            "Comment associer les en-têtes dans un tableau complexe ?",
            "Donner un \"ID\" unique à chaque en-tête, puis référencer ces IDs dans l'attribut \"En-têtes\" de chaque cellule de données via l'\"Éditeur de tableaux\"."
        ],
        [
            "Que se passe-t-il si les en-têtes ne sont pas associés ?",
            "Le lecteur d'écran lira les données sans contexte, rendant le tableau incompréhensible."
        ],
        [
            "Un tableau sans bordures est-il balisable ?",
            "Oui, le balisage est indépendant de l'apparence visuelle. La structure logique des données prime."
        ],
        [
            "Les tableaux de mise en page doivent-ils être balisés ?",
            "NON. Ils doivent être évités. Si présent, chaque \"cellule\" doit être balisée comme un paragraphe (<P>) ou autre, et les bordures mises en artefacts."
        ],

        // ==================== IMAGES & LIENS ====================
        [
            "Quelle différence entre image informative et image décorative ?",
            "Une image informative doit être balisée en <Figure> avec un texte de remplacement. Une image décorative doit être mise en artefact."
        ],
        [
            "Une image décorative doit-elle avoir un texte de remplacement ?",
            "Non, elle doit être marquée comme artefact et donc ignorée par les lecteurs d'écran."
        ],
        [
            "Comment baliser une image cliquable (lien) ?",
            "Créer un lien avec l'outil Lien d'Acrobat sur l'image, créer une balise <Link>, associer le lien via \"Rechercher... > Liens non marqués\", et ajouter un texte de remplacement décrivant la fonction du lien."
        ],
        [
            "Le texte de remplacement doit-il décrire l'image ou sa fonction ?",
            "Pour une image informative, décrire le contenu. Pour une image dans un lien, décrire la fonction du lien."
        ],
        [
            "Peut-on utiliser \"image de...\" dans un texte de remplacement ?",
            "Non, c'est redondant. Décrivez directement le contenu ou la fonction : \"Graphique montrant la croissance des ventes en 2023\"."
        ],

        // ==================== FORMULAIRES ====================
        [
            "Quelle est la balise principale d'un champ de formulaire ?",
            "La balise Formulaire : <Form>. Elle doit contenir le libellé textuel ET l'objet interactif du champ."
        ],
        [
            "Quelle propriété est obligatoire pour chaque champ de formulaire ?",
            "La propriété \"Info-bulle\" (Tooltip). C'est le nom accessible/la description lue par les lecteurs d'écran. À définir dans les Propriétés du champ > onglet \"Général\"."
        ],
        [
            "Comment rendre un champ de formulaire accessible à un lecteur d'écran ?",
            "1. Ajouter une info-bulle descriptive. 2. Associer le champ à une balise <Form>. 3. Définir l'ordre de tabulation."
        ],
        [
            "Comment définir l'ordre de tabulation ?",
            "Sélectionner toutes les pages dans le panneau \"Pages\" > Propriétés > onglet \"Ordre de tabulation\" > \"Utiliser la structure du document\"."
        ],
        [
            "Comment rendre accessibles les boutons radio ?",
            "Tous les boutons radio d'un même groupe doivent avoir EXACTEMENT le même \"Nom\" et la même \"Info-bulle\". Leur valeur individuelle \"Option\" les différencie (ex: \"Oui\", \"Non\")."
        ],
        [
            "Comment rendre accessibles les listes déroulantes ?",
            "Créer le champ avec l'outil \"Liste déroulante\", lui donner une info-bulle claire, et l'associer à une balise <Form> via \"Rechercher... > Annotations non marquées\"."
        ],
        [
            "Comment rendre accessibles les boutons de soumission ?",
            "Le baliser en <Form> avec une info-bulle descriptive (ex: \"Soumettre le formulaire d'inscription\")."
        ],
        [
            "Quel critère WCAG s'applique aux champs de formulaire ?",
            "Critère WCAG 4.1.2 - Nom rôle valeur (Niveau A). Le nom (info-bulle) et le rôle doivent être déterminables par programme."
        ],

        // ==================== CONTRÔLE & AUDIT ====================
        [
            "Où se trouve le vérificateur d'accessibilité dans Acrobat ?",
            "Outils > Accessibilité > Vérification complète (ou Vérification d'accessibilité)."
        ],
        [
            "Que signifie l'erreur « Texte de remplacement manquant » ?",
            "Une balise <Figure> (image informative) a été créée mais aucun texte de remplacement n'a été fourni dans ses propriétés."
        ],
        [
            "Que signifie l'erreur « Document sans langue définie » ?",
            "La langue principale du document n'est pas définie dans Fichier > Propriétés > Avancées > Langue."
        ],
        [
            "Pourquoi Acrobat ne suffit-il pas à lui seul pour l'audit ?",
            "Acrobat ne détecte pas tous les problèmes d'expérience utilisateur (navigation, lecture des tableaux, changements de langue) que révèlent les vrais lecteurs d'écran."
        ],
        [
            "À quoi sert PAC 3 ?",
            "PAC 3 (PDF Accessibility Checker) est un outil gratuit qui fournit un rapport détaillé conforme à la norme PDF/UA, plus strict qu'Acrobat."
        ],
        [
            "Comment simuler la lecture d'un lecteur d'écran ?",
            "Utiliser \"Exporter vers le texte (accessible)\" (Fichier > Exporter vers > Texte (accessible))."
        ],
        [
            "Quelle est la première chose à vérifier lors d'un audit PDF ?",
            "1. Est-ce un scan ? Si oui, faire l'OCR. 2. Le document a-t-il déjà des balises ? 3. Le titre et la langue sont-ils définis ?"
        ],
        [
            "Pourquoi le balisage automatique n'est-il pas fiable ?",
            "Il est acceptable uniquement pour des documents très simples. Une revue et correction manuelles sont presque toujours nécessaires."
        ],

        // ==================== M.Anello IANNUZZI (DÉTAILLÉ) ====================
        [
            "Qui est M.Anello Iannuzzi ?",
            "M.Anello Iannuzzi est un entrepreneur et dirigeant d'entreprise français, né en avril 1969 (55 ans en 2024). Il est actuellement président de deux sociétés de services : EURO INFORMATION DIRECT SERVICES (EIDS) et EURO TELE SERVICES. Il évolue principalement dans les secteurs des services administratifs, du soutien aux entreprises et des services financiers."
        ],
        [
            "D'où vient M.Anello Iannuzzi ?",
            "M.Anello Iannuzzi est français. Ses principales sociétés sont basées à Strasbourg, mais il a également été actif à Annecy dans le passé."
        ],
        [
            "Quel est le parcours professionnel d'M.Anello Iannuzzi ?",
            "Son parcours montre une évolution du secteur financier vers les services administratifs :\n• 2016-2020 : Dirigeant de GENEVE COURTAGES SARL (services financiers et assurance)\n• Depuis 2016 : Président d'EIDS (services administratifs)\n• Depuis 2024 : Président d'EURO TELE SERVICES (services administratifs)"
        ],
        [
            "Quelle est la date de naissance d'M.Anello Iannuzzi ?",
            "M.Anello Iannuzzi est né en avril 1969."
        ],
        [
            "Quelle est la profession principale d'M.Anello Iannuzzi ?",
            "Il est dirigeant d'entreprise, spécialisé dans les activités administratives, le soutien aux entreprises et les services financiers."
        ],
        [
            "Dans quelles sociétés M.Anello Iannuzzi est-il actuellement président ?",
            "Il est président de EURO INFORMATION DIRECT SERVICES (SAS) depuis le 22 novembre 2016 et de EURO TELE SERVICES (SAS) depuis le 2 octobre 2024."
        ],
        [
            "Quelle société a été dirigée par M.Anello Iannuzzi dans le passé ?",
            "Il a été dirigeant de GENEVE COURTAGES SARL entre 2016 et 2020, une société active dans les services financiers et l'assurance."
        ],
        [
            "Quelle est l'activité principale d'EURO INFORMATION DIRECT SERVICES (EIDS) ?",
            "EIDS opère dans le soutien administratif aux entreprises. C'est une société de Business Process Outsourcing (BPO) qui fournit des services externalisés, principalement pour le groupe Crédit Mutuel Alliance Fédérale."
        ],
        [
            "Quel est l'effectif d'EIDS en 2022 ?",
            "L'effectif était compris entre 50 et 99 salariés en 2022."
        ],
        [
            "Quel a été le chiffre d'affaires d'EIDS en 2023 ?",
            "Le chiffre d'affaires s'élevait à environ 21,3 millions d'euros en 2023."
        ],
        [
            "Quel a été le résultat net d'EIDS en 2023 ?",
            "Le résultat net était d'environ 1,09 million d'euros en 2023."
        ],
        [
            "Quelle est l'activité d'EURO TELE SERVICES ?",
            "EURO TELE SERVICES est active dans le soutien administratif aux entreprises, similaire à EIDS."
        ],
        [
            "Quel est l'effectif d'EURO TELE SERVICES en 2022 ?",
            "L'effectif était compris entre 250 et 499 salariés en 2022."
        ],
        [
            "Quel a été le chiffre d'affaires d'EURO TELE SERVICES en 2023 ?",
            "Le chiffre d'affaires s'élevait à environ 25,3 millions d'euros en 2023."
        ],
        [
            "Quel a été le résultat net d'EURO TELE SERVICES en 2023 ?",
            "Le résultat net était d'environ 849 000 euros en 2023."
        ],
        [
            "Quel est le profil professionnel général d'M.Anello Iannuzzi ?",
            "C'est un entrepreneur et dirigeant français actif principalement dans les services administratifs, le support aux entreprises et le secteur financier. Il occupe des postes de président dans plusieurs sociétés basées à Strasbourg."
        ],
        [
            "À quel grand groupe bancaire appartient EIDS ?",
            "EIDS appartient au groupe Crédit Mutuel Alliance Fédérale."
        ],
        [
            "Où se trouvent les sociétés dont M.Anello Iannuzzi est président ?",
            "Ses principales sociétés sont basées à Strasbourg. Il a également été actif à Annecy par le passé."
        ],
        [
            "M.Anello Iannuzzi est-il plutôt un dirigeant salarié ou un entrepreneur ?",
            "Il est décrit à la fois comme un dirigeant et un entrepreneur, ce qui suggère qu'il est impliqué dans la création et/ou la propriété de ses entreprises."
        ],
        [
            "Depuis quand M.Anello Iannuzzi est-il président d'EIDS ?",
            "Il est président d'EURO INFORMATION DIRECT SERVICES (SAS) depuis le 22 novembre 2016."
        ],
        [
            "La présidence d'M.Anello Iannuzzi chez EURO TELE SERVICES est-elle récente ?",
            "Oui, il est président depuis le 2 octobre 2024, ce qui est une nomination très récente."
        ],
        [
            "Les entreprises d'M.Anello Iannuzzi sont-elles rentables ?",
            "Oui, les deux principales sociétés (EIDS et EURO TELE SERVICES) affichent des résultats nets positifs en 2023, indiquant une rentabilité."
        ],
        [
            "M.Anello Iannuzzi a-t-il une dimension internationale ?",
            "Oui, indirectement à travers les activités d'EIDS en Tunisie et au Maroc via ses filiales, et par l'ancienne société GENEVE COURTAGES qui opérait dans les services financiers souvent transfrontaliers."
        ],

        // ==================== Mme.Olfa KARAMOSLY ====================
        [
            "Qui est Mme.Olfa Karamosly ?",
            "Mme.Olfa Karamosly est la Directrice d'Euro Information Direct Services (EIDS)."
        ],
        [
            "Quel est le rôle d'Mme.Olfa Karamosly au sein d'EIDS ?",
            "Elle occupe un rôle de direction ou de management, avec des responsabilités d'encadrement et de coordination des équipes d'EIDS en Tunisie et au Maroc."
        ],
        [
            "Pourquoi Mme.Olfa Karamosly a-t-elle été mentionnée publiquement ?",
            "Elle a été citée et remerciée dans un post LinkedIn pour son engagement envers les équipes d'EIDS Tunisie et Maroc lors d'une visite du président du groupe, M.Anello Iannuzzi."
        ],
        [
            "Que suggère le post LinkedIn concernant les compétences d'Mme.Olfa Karamosly ?",
            "Il suggère qu'elle a un rôle managérial et opérationnel, avec un accompagnement constant des équipes."
        ],
        [
            "Quelles informations manquent sur Mme.Olfa Karamosly ?",
            "Il n'y a pas de biographie publique détaillée (parcours académique, expériences antérieures) ni d'articles de presse ou de profil LinkedIn accessible sans compte confirmant son historique."
        ],
        
        // ==================== GREETINGS STANDARD ====================
        [
            "bonjour",
            "👋 Bonjour ! Je suis Pixels, votre assistant spécialisé en accessibilité PDF et informations professionnelles.\n\n📄 Je peux répondre sur :\n• Balisage PDF et accessibilité\n• M.Anello Iannuzzi et ses sociétés\n• Mme.Olfa Karamosly chez EIDS\n\nComment puis-je vous aider ?"
        ],
        [
            "hello",
            "👋 Hello ! Je suis votre assistant intelligent.\n\nPosez-moi vos questions sur :\n• Le balisage PDF\n• Les profils professionnels\n• L'accessibilité numérique"
        ],
        [
            "salut",
            "👋 Salut ! Bienvenue dans l'assistant Pixels.\n\nEssayer :\n• \"Qu'est-ce que le balisage PDF ?\"\n• \"Qui est M.Anello Iannuzzi ?\"\n• \"Comment baliser un tableau ?\""
        ],
        [
            "cava",
            "😊 Je vais très bien, merci ! Prêt à répondre à vos questions."
        ],
        [
            "comment ça va",
            "✨ Tout va bien, merci ! Je suis là pour vous aider."
        ]
    ],

    "Synonyms": [
        // ==================== CONVERSATIONS CASUAL ====================
        [
            "hey",
            "yo",
            "coucou",
            "wesh",
            "hello there",
            "salut l'ami",
            "hey pixel",
            "hello buddy",
            "what's up",
            "hi there"
        ],
        [
            "bon matin",
            "bonjour matin",
            "good morning",
            "matin",
            "salut matinal",
            "bon début de journée",
            "hello le matin"
        ],
        [
            "bonsoir",
            "bonne soirée",
            "good evening",
            "soir",
            "salut soir",
            "bonne nuit",
            "hello le soir"
        ],
        [
            "quoi de neuf",
            "quoi de beau",
            "what's new",
            "des nouvelles",
            "quoi de neuf aujourd'hui",
            "des infos",
            "quoi de frais"
        ],
        [
            "tu bosses sur quoi",
            "tu travailles sur quoi",
            "what do you work on",
            "ton travail",
            "tes spécialités",
            "tu fais quoi comme travail",
            "tes domaines"
        ],
        [
            "t'es qui",
            "qui es-tu",
            "who are you",
            "présente toi",
            "ton identité",
            "c'est qui pixels",
            "tu t'appelles comment"
        ],
        [
            "présente-toi",
            "qui es tu",
            "introduce yourself",
            "parle-moi de toi",
            "ton profil",
            "décris-toi",
            "raconte-moi qui tu es"
        ],
        [
            "tu fais quoi",
            "que fais-tu",
            "what do you do",
            "tes activités",
            "ton rôle",
            "quelle est ta fonction",
            "tes compétences"
        ],
        [
            "merci",
            "merci beaucoup",
            "thanks",
            "thank you",
            "gracias",
            "danke",
            "grazie",
            "merci bien",
            "c'est gentil"
        ],
        [
            "ok",
            "d'accord",
            "okay",
            "entendu",
            "compris",
            "roger that",
            "ça marche",
            "pas de souci"
        ],
        [
            "a plus",
            "à plus tard",
            "see you",
            "à bientôt",
            "ciao",
            "à la prochaine",
            "salut",
            "bye"
        ],
        [
            "bye",
            "au revoir",
            "goodbye",
            "à plus",
            "salut",
            "take care",
            "à demain",
            "bye bye"
        ],

        // ==================== PDF BALISAGE ====================
        [
            "Qu'est-ce que le balisage d'un PDF ?",
            "c'est quoi le balisage pdf",
            "définition balisage pdf",
            "balisage pdf définition",
            "expliquez le balisage pdf",
            "balisage pdf explication",
            "définir balisage pdf",
            "que signifie baliser un pdf",
            "balisage pdf c'est quoi",
            "à quoi sert le balisage pdf",
            "pdf balisé c'est quoi",
            "balisage document pdf",
            "qu'est-ce que baliser",
            "signification balisage pdf",
            "comprendre balisage pdf",
            "explication balisage"
        ],
        [
            "Pourquoi le balisage est-il obligatoire pour l'accessibilité numérique ?",
            "obligation balisage",
            "nécessité balisage",
            "pourquoi baliser pdf",
            "essentiel baliser pdf",
            "importance balisage pdf",
            "pourquoi c'est obligatoire baliser",
            "balisage obligatoire raison",
            "accessibilité numérique balisage",
            "réglementation balisage pdf",
            "pourquoi faut-il baliser",
            "obligatoire accessibilité pdf",
            "loi balisage pdf",
            "normes balisage obligatoires",
            "contrainte balisage pdf",
            "exigence balisage"
        ],
        [
            "Le balisage a-t-il un impact sur l'apparence visuelle du document ?",
            "balisage change apparence pdf",
            "balises visibles pdf",
            "balisage affecte présentation",
            "pdf modifié par balisage",
            "balisage visuel impact",
            "apparence balisage pdf",
            "les balises se voient-elles",
            "balisage invisible pdf",
            "balisage modifie-t-il le visuel",
            "pdf apparence changée balisage",
            "impact visuel balisage",
            "balises cachées pdf",
            "métadonnées visibles",
            "balisage et design pdf"
        ],
        [
            "Qu'est-ce que la racine de balises (Tags Root) ?",
            "racine de balises définition",
            "tags root c'est quoi",
            "conteneur principal balises",
            "définir racine balises",
            "tags root explication",
            "racine balises acrobat",
            "conteneur balises pdf",
            "root tags pdf",
            "racine tags pdf",
            "conteneur racine balises",
            "début arborescence balises",
            "première balise pdf",
            "racine structure balises",
            "tags root importance"
        ],
        [
            "Qu'est-ce qu'un artefact et quand doit-on l'utiliser ?",
            "artefacts pdf définition",
            "c'est quoi artefacts pdf",
            "éléments décoratifs pdf",
            "contenu non informatif pdf",
            "artefact acrobat explication",
            "quand utiliser artefact",
            "éléments à ignorer pdf",
            "contenu décoratif pdf",
            "artefact définition",
            "éléments non balisés pdf",
            "contenu ignoré lecteur écran",
            "artefact vs balise",
            "quand mettre en artefact",
            "éléments décoratifs accessibilité"
        ],
        [
            "Quelle est la différence entre contenu informatif et contenu décoratif ?",
            "contenu informatif vs décoratif",
            "différence informatif décoratif pdf",
            "contenu à baliser vs artefact",
            "informatif décoratif distinction",
            "quoi baliser quoi ignorer",
            "éléments informatifs pdf",
            "contenu significatif vs décoratif",
            "différence contenu utile décoratif",
            "qu'est-ce qui doit être balisé",
            "éléments à baliser pdf",
            "contenu important vs secondaire",
            "informatif ou décoratif",
            "critères contenu informatif"
        ],

        // ==================== BALISES SPÉCIFIQUES ====================
        [
            "Quelle balise utiliser pour le titre principal du document ?",
            "balise titre principal",
            "balise h document",
            "titre couverture pdf",
            "balise pour titre",
            "h tag pdf",
            "balise titre unique pdf",
            "titre document balisé",
            "balise titre principale",
            "balise h pour titre",
            "titre unique pdf balisé",
            "premier titre document",
            "balise h seule",
            "titre principal balise",
            "h seul pdf"
        ],
        [
            "Quelle balise utiliser pour un titre de section ?",
            "balises titres sections",
            "h1 h2 h3 pdf",
            "titres hiérarchie pdf",
            "balises titres niveaux",
            "titres structurés pdf",
            "h1 à h6 pdf",
            "balises heading pdf",
            "titres accessibles pdf",
            "balises h1 h2 h3",
            "titres hiérarchiques pdf",
            "niveaux titres balises",
            "heading tags pdf",
            "titres sections balisés",
            "h1 h2 utilisation"
        ],
        [
            "Quelle balise utiliser pour un paragraphe ?",
            "baliser paragraphe pdf",
            "balise p pdf",
            "texte paragraphe balisé",
            "balisage texte simple",
            "balise paragraphe acrobat",
            "p tag pdf",
            "texte normal balisé",
            "balise p pour texte",
            "paragraphe balisé pdf",
            "texte simple balise",
            "p tag utilisation",
            "balise paragraphe standard",
            "texte corps document"
        ],
        [
            "Quelle balise utiliser pour une image informative ?",
            "baliser image pdf",
            "figure pdf balisage",
            "image informative balisée",
            "balise figure pdf",
            "image balisée acrobat",
            "figure tag pdf",
            "balise pour image",
            "image avec alt text pdf",
            "balise figure image",
            "image informative tag",
            "figure avec description",
            "balise img pdf",
            "image avec texte alternatif"
        ],
        [
            "Où ajoute-t-on le texte de remplacement (alternative textuelle) ?",
            "texte remplacement image",
            "alt text pdf",
            "ajouter description image",
            "propriétés texte remplacement",
            "alternative textuelle pdf",
            "description image acrobat",
            "champ alt text pdf",
            "texte alternatif image",
            "où mettre alt text",
            "ajouter alt texte pdf",
            "description image propriétés",
            "texte remplacement où",
            "champ description image",
            "alt text emplacement"
        ],

        // ==================== ORDRE DE LECTURE ====================
        [
            "Qu'est-ce que l'ordre de lecture logique ?",
            "ordre lecture pdf",
            "ordre logique lecture",
            "flux lecture pdf",
            "navigation logique pdf",
            "lecture séquentielle pdf",
            "ordre de parole pdf",
            "flux de contenu pdf",
            "lecture linéaire pdf",
            "ordre lecture accessibilité",
            "séquence lecture pdf",
            "ordre naturel lecture",
            "lecture logique document",
            "flux lecture accessible",
            "ordre lecture lecteur écran"
        ],
        [
            "En quoi l'ordre de lecture est-il différent de l'ordre visuel ?",
            "différence ordre lecture visuel",
            "ordre vs apparence pdf",
            "lecture logique vs visuelle",
            "z-order vs lecture",
            "empilement vs séquence",
            "ordre visuel différent lecture",
            "lecture vs vision pdf",
            "hiérarchie visuelle vs lecture",
            "ordre couches vs lecture",
            "apparence vs accessibilité",
            "design vs lecture pdf"
        ],

        // ==================== TABLEAUX ====================
        [
            "Quelles sont les balises obligatoires d'un tableau de données ?",
            "balises tableau pdf",
            "table tr th td",
            "tableau données balisé",
            "balises essentielles tableau",
            "tableau accessible balises",
            "structure tableau pdf",
            "balises tableau acrobat",
            "table data tags pdf",
            "balises obligatoires tableau",
            "table tr th td pdf",
            "structure tableau balisé",
            "balises tableau accessibilité",
            "tableau tags nécessaires",
            "éléments tableau balisé"
        ],
        [
            "Pourquoi faut-il associer les en-têtes (<TH>) aux cellules de données (<TD>) ?",
            "association en-têtes tableau",
            "th td association",
            "en-têtes liés cellules",
            "tableau accessible association",
            "pourquoi associer th td",
            "lecteur écran tableau association",
            "lien en-têtes données tableau",
            "association cellules tableau",
            "th td relation",
            "en-têtes associés tableau",
            "association pour accessibilité",
            "tableau structure associée"
        ],

        // ==================== FORMULAIRES ====================
        [
            "Quelle propriété est obligatoire pour chaque champ de formulaire ?",
            "info-bulle formulaire",
            "tooltip champ pdf",
            "description champ accessible",
            "propriété cruciale formulaire",
            "champ obligatoire info-bulle",
            "nom accessible formulaire",
            "description champ pdf",
            "info-bulle obligatoire",
            "tooltip nécessaire champ",
            "description accessible formulaire",
            "propriété essentielle formulaire",
            "champ description obligatoire"
        ],

        // ==================== CONTRÔLE & AUDIT ====================
        [
            "Où se trouve le vérificateur d'accessibilité dans Acrobat ?",
            "vérificateur accessibilité acrobat",
            "outil vérification pdf",
            "test accessibilité acrobat",
            "contrôle accessibilité pdf",
            "checker accessibilité pdf",
            "audit pdf acrobat",
            "vérification conformité pdf",
            "outil audit pdf",
            "vérificateur acrobat où",
            "menu vérification accessibilité",
            "test pdf accessible acrobat",
            "contrôleur accessibilité pdf"
        ],
        [
            "Pourquoi Acrobat ne suffit-il pas à lui seul pour l'audit ?",
            "limites acrobat audit",
            "acrobat insuffisant test",
            "pourquoi tester avec d'autres outils",
            "complément audit pdf",
            "acrobat vs autres vérificateurs",
            "acrobat pas assez",
            "pourquoi d'autres outils audit",
            "acrobat limitations vérification",
            "nécessité outils externes audit",
            "acrobat seul insuffisant"
        ],

        // ==================== M.Anello IANNUZZI ====================
        [
            "Qui est M.Anello Iannuzzi ?",
            "M.Anello Iannuzzi qui est-ce",
            "présentation M.Anello Iannuzzi",
            "c'est qui M.Anello Iannuzzi",
            "biographie M.Anello Iannuzzi",
            "profil M.Anello Iannuzzi",
            "M.Anello Iannuzzi dirigeant",
            "M.Anello Iannuzzi entrepreneur",
            "qui est Monsieur Iannuzzi",
            "M.Anello Iannuzzi info",
            "qui est M.Anello",
            "Iannuzzi qui",
            "président EIDS qui",
            "dirigeant français Iannuzzi"
        ],
        [
            "Quelle est la date de naissance d'M.Anello Iannuzzi ?",
            "naissance M.Anello Iannuzzi",
            "M.Anello Iannuzzi date naissance",
            "année naissance M.Anello Iannuzzi",
            "M.Anello Iannuzzi né quand",
            "âge M.Anello Iannuzzi",
            "M.Anello Iannuzzi année naissance",
            "date anniversaire M.Anello Iannuzzi",
            "M.Anello Iannuzzi 1969",
            "M.Anello Iannuzzi né en",
            "date naissance Iannuzzi",
            "anniversaire M.Anello",
            "M.Anello né avril 1969",
            "Iannuzzi date naissance"
        ],
        [
            "Quelle est la profession principale d'M.Anello Iannuzzi ?",
            "métier M.Anello Iannuzzi",
            "profession M.Anello Iannuzzi",
            "M.Anello Iannuzzi que fait-il",
            "secteur M.Anello Iannuzzi",
            "activité M.Anello Iannuzzi",
            "fonction M.Anello Iannuzzi",
            "poste M.Anello Iannuzzi",
            "travail M.Anello Iannuzzi",
            "M.Anello Iannuzzi occupation",
            "Iannuzzi profession",
            "M.Anello travaille dans",
            "secteur d'activité Iannuzzi",
            "métier président EIDS"
        ],
        [
            "Dans quelles sociétés M.Anello Iannuzzi est-il actuellement président ?",
            "sociétés présidées M.Anello Iannuzzi",
            "présidences M.Anello Iannuzzi",
            "entreprises dirigées M.Anello Iannuzzi",
            "M.Anello Iannuzzi président de quoi",
            "EIDS EURO TELE SERVICES président",
            "entreprises M.Anello Iannuzzi",
            "sociétés dirigées par Iannuzzi",
            "président EIDS et EURO TELE SERVICES",
            "M.Anello président entreprises",
            "Iannuzzi président sociétés",
            "quelles entreprises préside Iannuzzi",
            "président de EIDS et autre"
        ],
        [
            "À quel grand groupe bancaire appartient EIDS ?",
            "groupe propriétaire EIDS",
            "Crédit Mutuel EIDS",
            "appartenance EIDS",
            "groupe bancaire EIDS",
            "EIDS Crédit Mutuel Alliance Fédérale",
            "groupe parent EIDS",
            "banque propriétaire EIDS",
            "EIDS fait partie de",
            "groupe EIDS",
            "EIDS appartient à",
            "propriétaire EIDS Crédit Mutuel",
            "groupe bancaire propriétaire EIDS"
        ],

        // ==================== Mme.Olfa KARAMOSLY ====================
        [
            "Qui est Mme.Olfa Karamosly ?",
            "Mme.Olfa Karamosly qui est-ce",
            "présentation Mme.Olfa Karamosly",
            "directrice EIDS",
            "c'est qui Mme.Olfa Karamosly",
            "biographie Mme.Olfa Karamosly",
            "profil Mme.Olfa Karamosly",
            "Mme.Olfa Karamosly directrice",
            "qui est Madame Karamosly",
            "Mme.Olfa Karamosly info",
            "directrice EIDS qui",
            "Karamosly qui",
            "Mme.Olfa qui est-ce",
            "directrice d'EIDS"
        ],
        [
            "Quel est le rôle d'Mme.Olfa Karamosly au sein d'EIDS ?",
            "fonction Mme.Olfa Karamosly",
            "responsabilités Mme.Olfa Karamosly",
            "poste Mme.Olfa Karamosly EIDS",
            "missions Mme.Olfa Karamosly",
            "rôle Mme.Olfa Karamosly EIDS",
            "position Mme.Olfa Karamosly",
            "tâches Mme.Olfa Karamosly",
            "Mme.Olfa Karamosly rôle",
            "Karamosly fonction EIDS",
            "poste Mme.Olfa chez EIDS",
            "responsabilités directrice EIDS",
            "rôle Mme.Olfa dans EIDS"
        ],

        // ==================== GREETINGS STANDARD ====================
        [
            "bonjour",
            "hello",
            "salut",
            "bonsoir",
            "coucou",
            "hey",
            "hi",
            "bon matin",
            "bon après-midi",
            "salutations",
            "hola",
            "ciao",
            "good day",
            "welcome",
            "greetings"
        ],
        [
            "cava",
            "comment ça va",
            "ça va",
            "comment vas-tu",
            "tu vas bien",
            "comment allez-vous",
            "cv",
            "ça roule",
            "how are you",
            "how's it going",
            "tout va bien",
            "ça marche",
            "you good",
            "what's up"
        ],
        [
            "comment ça va",
            "ça va bien",
            "comment allez-vous",
            "comment te sens-tu",
            "tout va bien",
            "comment vas-tu aujourd'hui",
            "how are you doing",
            "how do you feel",
            "how's everything",
            "how's life",
            "ça va aujourd'hui",
            "comment ça va toi"
        ]
    ],

    "Extensions": [
        // Préfixes user-friendly
        [
            ""
        ],
        
        // Ponctuation variée
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
            " 🌟"
        ],
        
        // Suffixes user-friendly
        [
            ""
        ]
    ],

    "Temp": []
};

console.log("✅ sample-data.js loaded successfully!");
console.log("DataSet items:", sampleData.DataSet.length);
console.log("Synonyms items:", sampleData.Synonyms.length);
console.log("Extensions: Préfixes=" + sampleData.Extensions[0].length + 
           ", Ponctuation=" + sampleData.Extensions[1].length + 
           ", Suffixes=" + sampleData.Extensions[2].length);