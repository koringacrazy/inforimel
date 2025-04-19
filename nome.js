 // Importa os módulos do Firebase
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
 import { getFirestore, collection, query, where, getDocs } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js";

 // Configuração do Firebase
 const firebaseConfig = {
     apiKey: "AIzaSyD6_K4aHxzYtcYPjeudsSQW_kQKNF4TH-c",
     authDomain: "inforimel-679f3.firebaseapp.com",
     projectId: "inforimel-679f3",
     storageBucket: "inforimel-679f3.firebasestorage.app",
     messagingSenderId: "729241397682",
     appId: "1:729241397682:web:961681efd9e702c1045cab"
 };

 // Inicializa Firebase
 const app = initializeApp(firebaseConfig);
 const db = getFirestore(app);

 // Função para carregar o nome do aluno
 async function carregarNomeAluno() {
     // Verifica se o processo está no localStorage
     const processo = localStorage.getItem('processo');
     
     if (!processo) {
         console.error('Número de processo não encontrado no localStorage');
         return;
     }

     try {
         // Consulta a coleção de alunos no Firestore
         const alunoRef = collection(db, "alunos");
         const q = query(alunoRef, where("processo", "==", processo));
         const querySnapshot = await getDocs(q);

         if (!querySnapshot.empty) {
             // Supondo que o nome esteja na coleção "aluno" com o campo 'nome'
             const aluno = querySnapshot.docs[0].data();
             document.getElementById('name').textContent = aluno.nome; // Atualiza o nome na página
         } else {
             console.log('Aluno não encontrado');
         }
     } catch (error) {
         console.error('Erro ao buscar aluno: ', error);
     }
 }

 // Chama a função ao carregar a página
 window.onload = function() {
     carregarNomeAluno();
 };