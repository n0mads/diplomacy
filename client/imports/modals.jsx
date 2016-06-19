import { ReactiveVar } from 'meteor/reactive-var'

export const activeModal = new ReactiveVar()


export function getActiveModal() {
  return activeModal.get()
}


export function openModal(modalView) {
  activeModal.set(modalView)
}


export function closeModal() {
  activeModal.set(null)
}