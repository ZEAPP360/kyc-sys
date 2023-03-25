import type { VerticalNavItems } from '@/@layouts/types'

export default [
  {
    title: 'Dashboard',
    to: { name: 'index' },
    icon: { icon: 'mdi-home-outline' },
  },
  {
    title: 'Site Configuration',
    to: { name: 'second-page' },
    icon: { icon: 'mdi-file-document-outline' },
  },
  {
    title: 'Merchants',
    to: { name: 'second-page' },
    icon: { icon: 'mdi-file-document-outline' },
  },
  {
    title: 'Membership',
    to: { name: 'second-page' },
    icon: { icon: 'mdi-file-document-outline' },
  },
  {
    title: 'Verifications',
    to: { name: 'second-page' },
    icon: { icon: 'mdi-chat-outline' },
  },
  {
    title: 'Price Plans',
    to: { name: 'second-page' },
    icon: { icon: 'mdi-file-document-outline' },
  },
  {
    title: 'Income',
    to: { name: 'second-page' },
    icon: { icon: 'mdi-bank-outline' },
  },
  {
    title: 'Setting',
    to: { name: 'second-page' },
    icon: { icon: 'mdi-gear-outline' },
  },
] as VerticalNavItems
