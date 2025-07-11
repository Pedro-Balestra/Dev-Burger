import { List, ListPlus, Receipt } from "@phosphor-icons/react";

export const navLinks = [
    {
        id: 1,
        label: 'Pedidos',
        path: '/admin/pedidos',
        icon: <Receipt></Receipt>
    },
    {
        id: 1,
        label: 'Produtos',
        path: '/admin/produtos',
        icon: <List></List>
    },
    {
        id: 1,
        label: 'Adicionar Produto',
        path: '/admin/novo-produto',
        icon: <ListPlus></ListPlus>
    }
]