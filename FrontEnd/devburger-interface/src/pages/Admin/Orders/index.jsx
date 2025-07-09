import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useEffect, useState } from 'react';
import { api } from '../../../services/api';
import { orderStatusOptions } from './orderStatus';
import { Row } from './row';
import { Filter, FilterOptions } from './styles';

export function Orders() {
    const [orders, setOrders] = useState([]); //Backup
    const [filteredOrders, setFilteredOrders] = useState([]); //Os valores que estão na tela
    const [rows, setRows] = useState([]);
    const [activeStatus, setActiveStatus] = useState([]);

    useEffect(() => {
        async function loadOrders() {
            const { data } = await api.get('order');
            setOrders(data);
            setFilteredOrders(data);
        }
        loadOrders();
    }, []);

    function createData(order) {
        return {
            name: order.user.name,
            orderId: order._id,
            date: order.createdAt,
            status: order.status,
            products: order.products,
        };
    }

    useEffect(() => {
        const newRows = filteredOrders.map(order => createData(order));
        setRows(newRows);
    }, [filteredOrders]);

    function handleStatus(status) {
        if(status.id === 0) {
            setFilteredOrders(orders);
        } else {
            const newOrders = orders.filter(order => order.status === status.value);
            setFilteredOrders(newOrders);
        }
        setActiveStatus(status.id);
    }


    return (
        <>
            <Filter>
                {orderStatusOptions.map((status) => (
                    <FilterOptions
                        key={status.id}
                        onClick={() => handleStatus(status)}
                        $isActive={activeStatus === status.id}
                    >{status.label}</FilterOptions>
                ))}
            </Filter>
            <TableContainer component={Paper}>
                <Table aria-label="collapsible table">
                    <TableHead>
                        <TableRow>
                            <TableCell />
                            <TableCell >Pedido</TableCell>
                            <TableCell >Cliente</TableCell>
                            <TableCell >Data do Pedido</TableCell>
                            <TableCell >Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <Row
                                key={row.orderId}
                                row={row}
                                orders={orders}
                                setOrders={setOrders}
                            />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}