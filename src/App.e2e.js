import { Selector } from 'testcafe';

fixture `Todo List testing`
    .page `http://localhost:3000/`


const task = Selector('.todo-item')
const trash = Selector('.trash-btn')
const complete = Selector('.complete-btn')

let text1 = 'Faire les courses'
let text2 = 'Payer factures'
let text3 = 'Vidange voiture'

test('Ajouter une tâche', async(t) => {
    await (t)
    .click('.todo-input')
    .wait(500)
    .typeText('.todo-input', text1)
    .wait(500)
    .click('.fa-plus-square')
    .expect(task.nth(0).textContent).eql(text1)
    .wait(500)

    .click('.todo-input')
    .wait(500)
    .typeText('.todo-input', text2)
    .wait(500)
    .click('.fa-plus-square')
    .expect(task.nth(1).textContent).eql(text2)
    .wait(500)


    .click('.todo-input')
    .wait(500)
    .typeText('.todo-input', text3)
    .wait(500)
    .click('.fa-plus-square')
    .expect(task.nth(2).textContent).eql(text3)
    .wait(500)
  
    .click(complete.nth(0))
    .wait(200)
    .click(complete.nth(1))
    .wait(200)
    .click(complete.nth(2))
    .wait(200)

    .expect(task.nth(0).getStyleProperty('text-decoration')).match(/^line-through/)
    .expect(task.nth(1).getStyleProperty('text-decoration')).match(/^line-through/)  
    .expect(task.nth(2).getStyleProperty('text-decoration')).match(/^line-through/)     

    .click(trash.nth(0))
    .wait(200)
    .click(trash.nth(0))
    .wait(200)

    .expect(task.nth(2).exists).notOk()
    .expect(task.nth(1).exists).notOk()
    .expect(task.nth(0).exists).ok()
    
})
