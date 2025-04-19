// Configuração do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyD6_K4aHxzYtcYPjeudsSQW_kQKNF4TH-c",
    authDomain: "inforimel-679f3.firebaseapp.com",
    projectId: "inforimel-679f3",
    storageBucket: "inforimel-679f3.appspot.com",
    messagingSenderId: "729241397682",
    appId: "1:729241397682:web:961681efd9e702c1045cab"
};


  // Inicializa Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();


    // Verificar autenticação e carregar dados
    document.addEventListener('DOMContentLoaded', async function () {
  const processo = localStorage.getItem('processo');
  console.log('Processo recuperado do localStorage:', processo);

  if (!processo) {
    alert('Processo não encontrado no localStorage.');
    return;
  }

  try {
    const querySnapshot = await db.collection('alunos')
      .where('processo', '==', processo)
      .limit(1)
      .get();

    if (querySnapshot.empty) {
      alert('Aluno não encontrado.');
      return;
    }

    const doc = querySnapshot.docs[0];
    const data = doc.data();

    cursoAtual = data.curso || '';
classeAtual = data.classe || '';


    // Atualiza o painel com os dados do aluno
// Atualiza o painel com os dados do aluno
document.getElementById('processo').textContent = data.processo || '---';
document.getElementById('curso').textContent = data.curso || '---';
document.getElementById('classe').textContent = data.classe || '---';
document.getElementById('turma').textContent = data.turma || '---';
document.getElementById('turno').textContent = data.turno || '---';
document.getElementById('name').textContent = data.nome || 'Estudante';

// Atualiza pequenos textos adicionais se quiser
document.querySelector('#curso + small').textContent = data.regime || 'Tecnico';
document.querySelector('#classe + small').textContent = data.nivel || 'Final';
document.querySelector('#turma + small').textContent = data.sala || '---';


    document.querySelector('.dropdown-toggle').innerHTML = `<i class="fas fa-user-circle me-2"></i>${data.nome}`;

    // Buscar quantidade de disciplinas
    const disciplinasSnapshot = await db.collection('disciplinas')
      .where('classe', '==', data.classe)
      .get();

    const badge = document.querySelector('.list-group-item .badge.bg-primary');
    badge.textContent = data.classe === '13 ª' ? '1' : disciplinasSnapshot.size;

  } catch (error) {
    console.error("Erro ao buscar dados:", error);
  }
});


// Exemplo de horários fixos (pode ser substituído com Firebase depois)


async function abrirModalDisciplinas() {
    const lista = document.getElementById('lista-disciplinas');
    lista.innerHTML = '<div class="text-center text-muted">Carregando disciplinas...</div>';

    try {
        const docRef = await db.collection('disc').doc('InforGest13').get();

        if (!docRef.exists) {
            lista.innerHTML = '<div class="text-danger">Nenhuma disciplina encontrada.</div>';
            return;
        }

        const data = docRef.data();
        const disciplinas = [];

        // Coleta todas as propriedades disc1, disc2, ..., etc.
        for (let chave in data) {
            if (chave.startsWith('disc')) {
                disciplinas.push(data[chave]);
            }
        }

        if (disciplinas.length === 0) {
            lista.innerHTML = '<div class="text-warning">Nenhuma disciplina cadastrada.</div>';
        } else {
            lista.innerHTML = '';
            disciplinas.forEach(disc => {
                const item = document.createElement('li');
                item.className = 'list-group-item';
                item.textContent = disc;
                lista.appendChild(item);
            });
        }

        // Abre o modal
        const modal = new bootstrap.Modal(document.getElementById('modalDisciplinas'));
        modal.show();
    } catch (error) {
        console.error("Erro ao buscar disciplinas:", error);
        lista.innerHTML = '<div class="text-danger">Erro ao carregar disciplinas.</div>';
    }
}

    // Função para limpar localStorage e redirecionar para a página de login
    document.getElementById('sair').addEventListener('click', function () {
        // Limpar todos os dados do localStorage
        localStorage.clear();
        
        // Redirecionar para a página de login ou outra página desejada
        window.location.href = "../index.html";
    });

    
