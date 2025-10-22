//// CONSTANTES POUR LES BOUTONS DU HEADER ////
const lacoste = document.getElementById('lacoste');
const urgo = document.getElementById('urgo');
const fr = document.getElementById('fr');
const en = document.getElementById('en');

const brandButtons = [lacoste, urgo];
const langButtons = [fr, en];

const notes = [
    // GENERAL
    {
        slug: "call",
        translations: {
            FR: "Pourriez-vous nous rappeler au +33 1 44 58 12 99 afin que nous puissions traiter votre ticket ?",
            EN: "Could you please call us back at +33 1 44 58 12 99 so we can process your ticket ?"
        }
    },
    {
        slug: "follow",
        translations: {
            FR: "L'incident est-il toujours d'actualité ? Si tel est le cas, pouvez-vous nous recontacter par téléphone au +33 1 44 58 12 99 ?",
            EN: "Is the incident still ongoing? If so, could you please contact us again by phone at +33 1 44 58 12 99 ?"
        }
    },
    {
        slug: "modification",
        translations: {
            FR: "Des modifications ont été apporté sur votre compte.\nPourriez-vous réessayer et nous faire un retour ?",
            EN: "Changes have been made to your account.\nCould you try again and give us feedback ?"
        }
    },
    {
        slug: "reminder_1",
        translations: {
            FR: "Nous n'avons pas reçu de réponse de votre part suite à notre dernier message. Nous vous invitons à nous recontacter dès que vous serez disponible.\n\nSans retour de votre part après trois relances, nous procéderons à la clôture du ticket.\n\nMerci pour votre compréhension.",
            EN: "We have not received a reply to our last message. Please contact us again as soon as you are available..\n\nIf we do not hear from you after three reminders, we will close the ticket.\n\nThank you for your understanding."
        }
    },
    {
        slug: "reminder_2",
        translations: {
            FR: "Nous n'avons pas reçu de réponse de votre part suite à notre dernier message. Ceci est notre deuxième relance et nous vous invitons à nous recontacter dès que vous serez disponible.\n\nSans retour de votre part après trois relances, nous procéderons à la clôture du ticket.\n\nMerci pour votre compréhension.",
            EN: "We have not received a reply to our last message. This is our second reminder and we invite you to contact us again as soon as you are available.\n\nIf you do not reply after three reminders, we will close the ticket.\n\nThank you for your understanding."
        }
    },
    {
        slug: "reminder_3",
        translations: {
            FR: "Nous n'avons pas reçu de réponse de votre part à la suite de notre dernier message. Nous vous invitons à nous recontacter dès que vous serez disponible.\n\nIl s'agit de la dernière relance, votre ticket sera clôturé d'ici 48h en cas de non-retour de votre part.\n\nMerci pour votre compréhension.",
            EN: "We have not received a reply to our last message. Please contact us again as soon as you are available.\n\nThis is the last reminder, your ticket will be closed within 48 hours if you do not return.\n\nThank you for your understanding."
        }
    },
    {
        slug: "reminder_closure",
        translations: {
            FR: "Nous avons tenté de vous joindre à plusieurs reprises par téléphone et mails.\n\nN'ayant aucun retour de votre part nous clôturons administrativement votre demande.\n\nToutefois, vous pouvez rouvrir ce ticket ou un nouveau si nécessaire.\n\nMerci pour votre compréhension.",
            EN: "We have tried to reach you several times by phone and email.\n\nAs we don't have feedback from you, we are administratively closing the incident.\n\nHowever, you can reopen this ticket or a new one if necessary.\n\nThank you for your understanding."
        }
    },
    {
        slug: "escalation",
        translations: {
            FR: "Pourriez-vous prendre en charge ce ticket s'il vous plaît ?",
            EN: "Could you handle this ticket please?"
        },
        type: "esc"
    },
    {
        slug: "escalation_validation",
        translations: {
            FR: "Validez-vous cette demande ?",
            EN: "Do you approve this request?"
        },
        type: "esc"
    },
    {
        slug: "resolution_inc",
        translations: {
            FR: "Suite à l'intervention de nos services, votre incident est à présent résolu.\n\nNous procédons donc à la clôture de ce ticket.",
            EN: "Following our support team's intervention, your incident is now resolved.\n\nWe are therefore closing this ticket."
        }
    },
    {
        slug: "resolution_ritm",
        translations: {
            FR: "Suite à l'intervention de nos services, votre demande a bien été prise en compte.\n\nNous procédons donc à la clôture de ce ticket.",
            EN: "Following our support team's intervention, your request has been received.\n\nWe are therefore closing this ticket."
        }
    },
    {
        slug: "closure_inc_ritm",
        translations: {
            FR: "Votre ticket concerne une demande et non un incident. Afin de bien séparer les besoins des utilisateurs, nous allons clore ce ticket.\n\nVous pouvez refaire votre demande en suivant ce lien :\nhttps://lacoste.service-now.com/sp?id=sc_cat_item&sys_id=f47dff701b12ff8046d3dc65bd4bcb39",
            EN: "Your ticket concerns a request, not an incident. To properly separate user needs, we will close this ticket.\n\nYou can resubmit your request by following this link:\nhttps://lacoste.service-now.com/sp?id=sc_cat_item&sys_id=f47dff701b12ff8046d3dc65bd4bcb39"
        }
    },
    {
        slug: "closure_ritm_inc",
        translations: {
            FR: "Votre ticket concerne une déclaration d'incident et non une demande. Afin de bien séparer les besoins des utilisateurs, nous allons clore ce ticket.\n\nVous pouvez refaire votre déclaration d'incident en suivant ce lien :\nhttps://lacoste.service-now.com/sp?id=sc_cat_item&sys_id=3f1dd0320a0a0b99000a53f7604a2ef9",
            EN: "Your ticket concerns an incident report, not a request. To properly separate user needs, we will close this ticket.\n\nYou can resubmit your incident report by following this link:\nhttps://lacoste.service-now.com/sp?id=sc_cat_item&sys_id=3f1dd0320a0a0b99000a53f7604a2ef9"
        }
    },
    {
        slug: "closure_sg",
        translations: {
            FR: "Votre demande ne peut pas être prise en charge par notre service.\n\nNous vous invitons à contacter les services généraux à l'adresse crocoservices@lacoste.com s'il vous plaît.",
            EN: "Your request cannot be handled by our service.\n\nWe invite you to contact general services at crocoservices@lacoste.com please."
        }
    },
    {
        slug: "closure_jira",
        translations: {
            FR: "Votre demande ne peut pas être prise en charge par notre service.\n\nNous vous invitons à contacter les équipes Jira à l'adresse jira_admin@lacoste.com s'il vous plaît.",
            EN: "Your request cannot be handled by our service.\n\nWe invite you to contact the Jira teams at jira_admin@lacoste.com please."
        }
    },
    // INCIDENTS GENERAUX
    {
        slug: "private_browsing_chrome",
        translations: {
            FR: "Pourriez-vous essayer de vous y connecter en navigation privée ?\nCliquez sur les trois points verticaux en haut à droite de votre navigateur Chrome puis \"Nouvelle fenêtre de navigation privée\".\n\nCette action a-t-elle réglé votre incident ?",
            EN: "Could you try logging in in private browsing?\nClick on the three vertical dots at the top right of your Chrome browser then \"New Private Browsing Window\".\n\nDid this action resolve your incident ?"
        }
    },
    {
        slug: "clear_cache_chrome",
        translations: {
            FR: "Pourriez-vous vider le cache de votre navigateur ?\n\nPour Google Chrome :\n- Cliquez sur les trois points verticaux en haut à droite.\n- Allez dans Historique (ou raccourci ctrl + H)  > Supprimer les données de navigation.\n- Cliquez sur \"Paramètres avancées\" et dans le sélecteur \"Période\" choisir \"Toutes les périodes\"\n- Cochez uniquement les 4 premières cases \"Historique de navigation\", \"Historique des téléchargements\", \"Cookies\", \"Images et fichiers en cache\"\n- Cliquez sur \"Supprimer les données\"\n- Fermez le navigateur (vérifier bien que toutes vos fenêtres sont fermées)\n- Rouvrez le navigateur et réessayez\n\nLes actions ont elles réglé votre incident ?",
            EN: "Could you clear your browser cache ?\n\nFor Google Chrome:\n- Click on the three vertical dots at the top right.\n- Go to History (or shortcut ctrl + H) > Delete browsing data.\n- Click on \"Advanced settings\" and in the \"Period\" selector choose \"All periods\"\n- Check only the first 4 boxes \"Browsing history\", \"Download history\", \"Cookies\", \"Cached images and files\"\n- Click on \"Delete data\"\n- Close the browser (make sure all your windows are closed)\n- Reopen the browser and try again\n\nDid the actions resolve your incident ?"
        }
    },
    // {
    //     slug: "page_inaccessible",
    //     translations: {
    //         FR: "Avez-vous pu effectuer les tests de base suivants :\n- Tester en navigation privée. Si cela fonctionne, videz entièrement votre cache de navigateur.\n- Tester sur un autre navigateur.\n- Si vous avez des collègues en télétravail ont-ils également accès (via VPN) ?\n\nSi malgré tout cela le problème persiste, pourriez-vous refaire un test et nous fournir les informations suivantes :\n- Horodotage exact du test (date et heure).\n- Votre adresse IP lors du test.\n- Le lien exact auquel vous tenté d'accéder.\nEt nous confirmer que ce test est réalisé sous VPN.\n\nMerci d'avance pour votre retour.",
    //         EN: ""
    //     }
    // },
    // INCIDENTS APPLICATIFS
    {
        slug: "incident_ao_system_mdw_requirements",
        translations: {
            FR: "Pouvez vous nous transmettre votre numéro de PC commençant par FR ?\n\nVous pouvez le trouver soit sur votre bureau en haut à droite, soit en ouvrant les paramètres du poste et en allant dans \"Système\".",
            EN: "Can you please send us your PC number beginning with FR ?\n\nYou can find it either on your desktop in the top right corner, or by opening your computer's settings and going to \"System\"."
        }
    },
    {
        slug: "incident_ao_system_mdw_wn",
        translations: {
            FR: "Copie du fichier system.mdw de \\\\inffilprdstb1\\Distrib\\Soft\\AccesOrli DLL vers C:\\rtacc2000\\Office\n\nCopie du fichier system.mdw de \\\\inffilprdstb1\\Distrib\\Soft\\AccesOrli DLL vers \\\\FRLPFH5J094\\c$\\rtacc2000\\Office",
            EN: "Copie du fichier system.mdw de \\\\inffilprdstb1\\Distrib\\Soft\\AccesOrli DLL vers C:\\rtacc2000\\Office\n\nCopie du fichier system.mdw de \\\\inffilprdstb1\\Distrib\\Soft\\AccesOrli DLL vers \\\\FRLPFH5J094\\c$\\rtacc2000\\Office"
        },
        type: "wn"
    },
    {
        slug: "incident_ao_system_mdw_resolution",
        translations: {
            FR: "Merci pour votre retour.\nLe fichier manquant a bien été ajouté à votre poste.\n\nIl ne vous reste plus qu'à vous rendre sur votre bureau, dans le dossier \"Applications Lacoste\" et à exécuter \"Nouvelle version Access Orli\".\nUne fois cette tâche terminée vous pouvez relancer Access Orli et tout devrait être fonctionnel.\nN'hésitez pas à revenir vers nous si ce n'est pas le cas.",
            EN: "Thank you for your feedback.\nThe missing file has been added to your computer.\n\nAll you have to do now is go to your desktop, to the \"Lacoste Applications\" folder, and run \"New Access Orli Version.\"\nOnce this task is complete, you can restart Access Orli, and everything should be working properly.\nPlease don't hesitate to get back to us if this is not the case."
        }
    },
    // DEMANDES D'ACCES
    {
        slug: "access_access_orli_wn",
        translations: {
            FR: "Suivi [code]<a title=\"[Access Apps] - Various software installation\" href='kb_view.do?sys_kb_id=1a25b2361b6b0e10950a11fc2d4bcb3c' >KB0011222 : [Access Apps] - Various software installation</a>[/code]",
            EN: "Suivi [code]<a title=\"[Access Apps] - Various software installation\" href='kb_view.do?sys_kb_id=1a25b2361b6b0e10950a11fc2d4bcb3c' >KB0011222 : [Access Apps] - Various software installation</a>[/code]"
        },
        type: "wn"
    },
    {
        slug: "access_access_orli_resolution",
        translations: {
            FR: "Afin d'installer Access orli sur votre ordinateur, veuillez suivre les étapes suivantes :\n1. Ouvrir le dossier sur le bureau : \"Applications Lacoste\"\n2. Ouvrir le fichier : \"Nouvelle version access orli\"\n3. Une fenêtre s'ouvre et lance l'installation ; attendre la fin de l'installation et refermer la fenêtre\n3. Ouvrir Access Orli (une icône a été créé sur votre bureau)\n\nL'installation a-t-elle fonctionné ?",
            EN: "To install Access orli on your computer, please follow these steps:\n1. Open the folder on the desktop: \"Lacoste Applications\"\n2. Open the file: \"New version access orli\"\n3. A window opens and starts the installation; wait for the installation to complete and close the window 3. Open Access Orli (an icon has been created on your desktop) Did the installation work ?"
        }
    },
    {
        slug: "access_adobe_requirements",
        translations: {
            FR: "Afin de procéder à l'attribution des accès Adobe, merci de remplir et de nous retourner le formulaire ci-joint.",
            EN: "To proceed with the allocation of Adobe access, please complete and return the attached form to us."
        }
    },
    {
        slug: "access_adobe_wn",
        translations: {
            FR: "Suivi [code]<a title=\"[Adobe] - Adobe Software request management\" href='kb_view.do?sys_kb_id=1d740796c34bae10b16d1f0ed40131fd' >KB0011210 : [Adobe] - Adobe Software request management</a>[/code]\n\nFichier renommé en “LASTNAME firstname - INCxxxx.xlsx\”\n\nFichier déplacé dans \\\\usrtroyes.gdm.group.root\\groups\\Helpdesk2\\Commun\\Formulaires\\Adobe\n\nInstallation de Adobe Creative Cloud\n\nAjout groupe GROUPEAD sur AD\n\nConnexion Adobe Creative Cloud\n\nInstallation application APPLICATIONS\n\nLancement de APPLICATION OK",
            EN: "Suivi [code]<a title=\"[Adobe] - Adobe Software request management\" href='kb_view.do?sys_kb_id=1d740796c34bae10b16d1f0ed40131fd' >KB0011210 : [Adobe] - Adobe Software request management</a>[/code]\n\nFichier renommé en “LASTNAME firstname - INCxxxx.xlsx\”\n\nFichier déplacé dans \\\\usrtroyes.gdm.group.root\\groups\\Helpdesk2\\Commun\\Formulaires\\Adobe\n\nInstallation de Adobe Creative Cloud\n\nAjout groupe GROUPEAD sur AD\n\nConnexion Adobe Creative Cloud\n\nInstallation application APPLICATIONS\n\nLancement de APPLICATION OK"
        },
        type: "wn"
    },
    {
        slug: "access_ariba_requirements",
        translations: {
            FR: "Afin de procéder à l'attribution des accès Ariba, merci de remplir et de nous retourner le formulaire ci-joint.",
            EN: "To proceed with the allocation of Ariba access, please complete and return the attached form to us."
        }
    },
    {
        slug: "access_ariba_wn",
        translations: {
            FR: "Suivi [code]<a title=\"[Ariba] - Overview\" href='kb_view.do?sys_kb_id=18d7accdc3d8a250b16d1f0ed4013137' >KB0022372 : [Ariba] - Overview</a>[/code]\n\nCompte Ariba de UTILISATEUR créée\n\nAjout APP_Lemon_learning_Deployment\n\nEnvoi template [RITM00XXXX] - ARIBA  Création compte / Account Creation à l'utilisateur",
            EN: "Suivi [code]<a title=\"[Ariba] - Overview\" href='kb_view.do?sys_kb_id=18d7accdc3d8a250b16d1f0ed4013137' >KB0022372 : [Ariba] - Overview</a>[/code]\n\nCompte Ariba de UTILISATEUR créée\n\nAjout APP_Lemon_learning_Deployment\n\nEnvoi template [RITM00XXXX] - ARIBA  Création compte / Account Creation à l'utilisateur"
        },
        type: "wn"
    },
    {
        slug: "access_brand_library_requirements",
        translations: {
            FR: "Afin de vous donner accès à Brand Library nous aurions besoin des informations suivantes :\n_ nom et prénom de l'utilisateur\n_ validation du responsable de l'utilisateur (par mail à l'adresse suivante : support@lacoste.com ou par un message directement dans ce ticket)\n_ adresse e-mail de l'utilisateur\n_ entreprise de l'utilisateur\n_ les droits requis (download/upload/admin)",
            EN: "In order to give you access to Brand Library we would need the following information:\n_ user's first and last name\n_ validation from the user's manager (by email to the following address: support@lacoste.com or by a message directly in this ticket)\n_ user's email address\n_ user's company\n_ required rights (download/upload/admin)"
        }
    },
    {
        slug: "access_miro_requirements",
        translations: {
            FR: "Afin d'ajouter les utilisateurs dans l'application Miro, merci de nous fournir les informations suivantes :\n- Centre de coût\n- Validation écrite du responsable du centre de coût\n- Équipe à rejoindre au sein de l'application",
            EN: "To add users to the Miro application, please provide us with the following information:\n- Cost center\n- Written validation from the cost center manager\n- Team to join within the application"
        }
    },
    {
        slug: "access_orliweb_requirements",
        translations: {
            FR: "Afin de procéder à la création de votre compte Orliweb, pouvez-vous nous fournir un compte de référence ?",
            EN: "In order to create your Orliweb account, can you provide us with a reference account ?"
        }
    },
    {
        slug: "access_qliksense_requirements",
        translations: {
            FR: "Afin de vous accorder l'accès à Qliksense, pourriez-vous nous préciser les informations suivantes :\n_ stream (Sell In, Sell Out, etc…)\n_ les applications souhaités pour chaque stream\n_ les market code correspondant à la zone géographique (soit pour l'ensemble des flux, soit pour chaque application)",
            EN: "In order to grant you access to Qliksense, could you provide us with the following information:\n_ stream (Sell In, Sell Out, etc.)\n_ the desired applications for each stream\n_ the market codes corresponding to the geographical area (either for all the streams or for each application)"
        }
    },
    {
        slug: "access_rosario_requirements",
        translations: {
            FR: "Par défaut, l'application est accessible à tous les utilisateurs Lacoste. Cependant, des restrictions peuvent être appliquées sur certains menus et sous-menus.\n\nAfin de traiter efficacement votre demande, pourriez-vous nous préciser :\n- Les menus ou sous-menus auxquels vous souhaitez accéder.\n- Et, si possible, nous fournir les liens directs (URL) vers les menus concernées.",
            EN: "By default, the application is accessible to all Lacoste users. However, restrictions may apply to certain menus and submenus.\n\nIn order to efficiently process your request, could you please specify:\n- The menus or submenus you wish to access.\n- And, if possible, provide us with direct links (URLs) to the menus concerned."
        }
    },
    {
        slug: "validation_manager",
        translations: {
            FR: "Afin de satisfaire votre demande, nous aurions besoin de la validation de votre manager.\n\nVous pouvez nous transmettre cette validation :\n- Par mail à l'adresse suivante : support@lacoste.com\n- Ou par un message directement dans ce ticket",
            EN: "In order to satisfy your request, we would need validation from your manager. You can send us this validation: - By email to the following address: support@lacoste.com - Or by a message directly in this ticket"
        }
    }
];






const courtesies = {
    salutation: { FR: "Bonjour,\n\n", EN: "Hello,\n\n" },
    closing: { FR: "\n\nCordialement,", EN: "\n\nBest regards," }
};


const signatures = {
    lacoste:
    {
        FR: "\nSupport informatique Lacoste\n+33 1 44 58 12 99",
        EN: "\nLacoste IT support\n+33 1 44 58 12 99"
    },
    urgo:
    {
        FR: "\nSOS URGO\nSupport & Assistance IT\nURGO Medical And Healthcare\nPortail : https://sos.urgo.groupe.priv/ *\n*Disponible 24/7\nTéléphone : +33 (0)3 80 44 26 55 ou 1000**\n**Du lundi au vendredi, de 6h à 20h",
        EN: "\nSOS URGO\nIT Support & Assistance\nURGO Medical And Healthcare\nPortal: https://sos.urgo.groupe.priv/ *\n*Available 24/7\nPhone : +33 (0)3 80 44 26 55 ou 1000**\n**Monday to Friday, 6 AM - 8 PM (Paris time)"
    }
};


//// VARIABLES DE STOCKAGE ////
let brandSelected = null;
let langSelected = null;

//// UI HELPERS ////
function toggleActive(button, group) {
    group.forEach(btn => { btn.classList.remove('active'); btn.classList.add('inactive'); });
    button.classList.remove('inactive'); button.classList.add('active');
}

function activateButton(e) {
    const target = e.target;
    if (brandButtons.includes(target)) { toggleActive(target, brandButtons); brandSelected = target.id; }
    else if (langButtons.includes(target)) { toggleActive(target, langButtons); langSelected = target.id; }
}

function initButtons() {
    toggleActive(lacoste, brandButtons); brandSelected = 'lacoste';
    toggleActive(fr, langButtons); langSelected = 'FR';
}

[...brandButtons, ...langButtons].forEach(btn => btn.addEventListener('click', activateButton));
window.addEventListener('DOMContentLoaded', initButtons);

//// UTILS ////
function findNote(slug) {
    return notes.find(n => n.slug === slug) || null;
}

function buildMessage(slug) {
    if (!langSelected || !brandSelected) return null;

    const note = findNote(slug);
    if (!note) return null;

    const salutation = courtesies.salutation[langSelected];
    const body = note.translations?.[langSelected];
    const closing = courtesies.closing[langSelected];
    const signature = signatures[brandSelected]?.[langSelected];

    if (!salutation || !body || !closing || !signature) return null;

    if (!note.type) {
        return salutation + body + closing + signature;
    }

    if (note.type === "esc") {
        return salutation + body + closing;
    }

    return body;
}

// Fallback si Clipboard API indisponible
function legacyCopy(text) {
    const ta = document.createElement('textarea');
    ta.value = text; ta.setAttribute('readonly', ''); ta.style.position = 'fixed'; ta.style.top = '-9999px';
    document.body.appendChild(ta); ta.select();
    try { document.execCommand('copy'); } catch (e) { console.error(e); }
    document.body.removeChild(ta);
}

function copyText(text) {
    if (navigator.clipboard?.writeText) return navigator.clipboard.writeText(text);
    legacyCopy(text); return Promise.resolve();
}

//// COPIE (délégation d’événement sur <main>) ////
document.querySelector('main').addEventListener('click', (e) => {
    const btn = e.target.closest('button');
    if (!btn) return;

    const slug = btn.value;
    if (!slug) return;

    const content = buildMessage(slug);
    if (!content) {
        console.warn('Message incomplet (slug/langue/marque manquants).');
        return;
    }

    copyText(content)
        .then(() => {
            console.log(`✅ Copié : ${slug} (${langSelected} / ${brandSelected})`);
            btn.classList.add('copied');
            setTimeout(() => btn.classList.remove('copied'), 300);
        })
        .catch(err => console.error('❌ Erreur de copie :', err));
});
