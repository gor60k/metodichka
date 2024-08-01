export const ROUTE_PATHS = {

  products: '/products', // страница для справочника товаров 

  individuals: '/individuals', // страница для справочника физ. лиц 

  organizations: '/organizations', // страница для справочника организаций 

  pocupatels: '/pocupatels',

  selladresss: '/selladresss',

  stud: {
    list: '/stud',

    stud: '/stud/:id',
  },
  create1: '/create1',

  proxy: {

    list: '/proxy',// страница списка документов доверенность 

    proxy: '/proxy/:id', // страница конкретного документа доверенности со списком товаров  

  },

  create: '/create', // страница записи документа доверенности 

} 