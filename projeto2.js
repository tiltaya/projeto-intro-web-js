const cursos = [{
    curso: 'HTML e CSS',
    descrição: 'Aprenda HTML e CSS.',
    duração: '1 mês',
    valor: 500
},
{
    curso: 'JavaScript',
    descrição: 'Aprenda JavaScript.',
    duração: '2 meses',
    valor: 900
},
{
    curso: 'APIs REST',
    descrição: 'Aprenda APIs REST.',
    duração: '6 meses',
    valor: 2000
}]
const turmas = [{
    turma: 'Hipátia',
    curso: 'JavaScript',
    inicio: '30/11/2022',
    termino: '30/01/2023',
    alunos: 150,
    periodo: 'noturno',
    concluida: false
},
{
    turma: 'Sibyla',
    curso: 'JavaScript',
    inicio: '30/10/2022',
    termino: '30/12/2022',
    alunos: 200,
    periodo: 'integral',
    concluida: false
},
{
    turma: 'Curie',
    curso: 'HTML e CSS',
    inicio: '15/09/2022',
    termino: '15/10/2022',
    alunos: 180,
    periodo: 'noturno',
    concluida: true
},
{
    turma: 'Zhenyi',
    curso: 'HTML e CSS',
    inicio: '01/11/2022',
    termino: '01/01/2023',
    alunos: 80,
    periodo: 'integral',
    concluida: false
},
{
    turma: 'Clarke',
    curso: 'HTML e CSS',
    inicio: '04/07/2022',
    termino: '04/09/2022',
    alunos: 200,
    periodo: 'noturno',
    concluida: true
},
{
    turma: 'Blackwell',
    curso: 'APIsRest',
    inicio: '20/03/2022',
    termino: '20/06/2022',
    alunos: 100,
    periodo: 'integral',
    concluida: true
},
{
    turma: 'Elion',
    curso: 'APIsRest',
    inicio: '12/01/2022',
    termino: '12/06/2022',
    alunos: 200,
    periodo: 'noturno',
    concluida: true
},
{
    turma: 'Burnell',
    curso: 'APIsRest',
    inicio: '18/10/2022',
    termino: '18/04/2023',
    alunos: 90,
    periodo: 'integral',
    concluida: false
}]

const estudantes = [{
    estudante: 'Chris Evans',
    turma: 'Hipátia',
    curso: 'JavaScript',
    valor: 900,
    nParcelas: 9,
    desconto: false,
    parcelas: 100
},
{
    estudante: 'Halle Berry',
    turma: 'Burnell',
    curso: 'APIsRest',
    valor: 2000,
    nParcelas: 4,
    desconto: false,
    parcelas: 500
},
{
        estudante: 'Lashana Lynch',
        turma: 'Zhenyi',
        curso: 'HTML',
        valor: 500,
        nParcelas: 1,
        desconto: true,
        parcelas: 900
}]

const buscarCurso = (nome) => {
    return cursos.find((elem, index, arr) => elem.curso === nome)
}

const buscarTurma = (nome) => {
    return turmas.find((elem, index, arr) => elem.turma === nome)
}

const buscarEstudante = (nome) => {
    return estudantes.find((elem, index, arr) => elem.estudante === nome)
}

const matricular = (nome, cursot, turmat, numParcelas) => {

    const valores = parcelarCurso(cursot, numParcelas)

    for (const curso of cursot) {

        const fd = {
            estudante: nome,
            turma: turmat,
            curso: curso.curso,
            valor: curso.valor,
            nParcelas: numParcelas,
            desconto: valores.desconto !== 0,
            parcelas: valores.valorParc
        }
        
        estudantes.push(fd)
        console.log(`Aluno Matriculado. \nNome: ${nome} \nCurso: ${curso.curso}\nTurma: ${turmat}`);
    }
}

const adcCarrinho = (nomeCurso) => {
    const curso = buscarCurso(nomeCurso)
    carrinhoCursos.push(curso)
    return carrinhoCursos
}

const parcelarCurso = (carrinhoCursos, numeroDeParcelas) => {

    let valorTotal = 0
    let desconto = 0
    
    for (const curso of carrinhoCursos) {
        valorTotal += curso.valor
    }

    if (numeroDeParcelas  <= 2){
        valorTotal = valorTotal - (valorTotal * 0.2)
        desconto = 20

    } else if (carrinhoCursos.length === 2) {
        valorTotal = valorTotal - (valorTotal * 0.1)
        desconto = 10

    } else if (carrinhoCursos.length === 3) {
        valorTotal = valorTotal - (valorTotal * 0.15)
        desconto = 15
    }

    console.log(valorTotal)
    console.log(numeroDeParcelas);
    console.log(typeof valorTotal);
    console.log(typeof numeroDeParcelas);

    return {
        valorTotal: valorTotal,
        desconto: desconto,
        valorParc: valorTotal / numeroDeParcelas
    }
}

const carrinhoCursos = []

adcCarrinho("JavaScript")

console.log(carrinhoCursos);
console.log(estudantes);
matricular("Chios", carrinhoCursos, "Hipátia", 3)

console.log(estudantes);