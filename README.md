### **🌱 User Story (Backlog Produit)**

**US1** : _"En tant qu’utilisateur, je veux ajouter une plante à mon dashboard pour suivre son état."_  
**Critères d’acceptation** :

- Formulaire avec nom, espèce, fréquence d’arrosage.
- Photo upload ou sélection depuis une bibliothèque.
- Notification de confirmation.

---

### **🔨 Découpage en Issues Techniques** _(Backlog Sprint)_

Chaque issue est **autonome**, **estimable** et **livrable** en 1-2 jours max.

| **Issue Technique**                      | **Détails**                                                    | **Labels**            |
| ---------------------------------------- | -------------------------------------------------------------- | --------------------- |
| **#101 - Créer le modèle "Plante"**      | - Champs : `nom`, `espèce`, `fréquence_arrosage`, `photo_url`. | `backend`, `database` |
| **#102 - Formulaire d’ajout (Frontend)** | - Composant React avec validation.                             | `frontend`, `UI/UX`   |
| **#103 - Upload de photo (API)**         | - Endpoint `/upload-photo` (Stockage S3 ou local).             | `backend`, `API`      |
| **#104 - Notification de confirmation**  | - Envoi d’un email/push via `Firebase` ou `Nodemailer`.        | `backend`, `notif`    |

---

### **🎯 Pourquoi ce découpage ?**

1. **Équipe Front/Back** : Chaque membre prend une issue qui correspond à ses compétences.
2. **Tests unitaires** : Chaque issue peut être testée indépendamment (ex: `#101` testée avec Jest).
3. **Livraison incrémentale** : Même si `#104` (notifications) est en retard, le reste est utilisable.

---

### **📌 Exemple dans GitHub**

1. **Lier les issues techniques à l’US mère** :
   - Dans la description de `#101`, `#102`, etc., ajoutez :
     ```markdown
     **Parent Issue** : #US1 (Ajouter une plante)
     ```
2. **Utiliser les "Task Lists"** dans l’US originale :
   ```markdown
   - [ ] #101 - Modèle Plante
   - [ ] #102 - Formulaire frontend
   - [ ] #103 - Upload photo
   - [ ] #104 - Notification
   ```

---

### **🚀 Workflow Recommandé**

1. **Sprint Planning** : L’équipe discute du découpage.
2. **Développement** : Chaque issue est assignée et suivie dans la colonne _In Progress_.
3. **Revue** : Validation des sous-tâches avant de fermer l’US mère.

---

### **💡 Astuce pour les Étudiants**

- **Taille des issues** : Utilisez la règle du _"1 jour max"_ pour éviter les blocages.
- **Exemple de priorisation** :
  ```
  1. #101 (Modèle) → 2. #102 (Front) → 3. #103 (Upload) → 4. #104 (Notif)
  ```
