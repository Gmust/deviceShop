import {$host, $authHost} from './index';

export const createType = async (type: { name: string }) => {
    const {data} = await $authHost.post(`/api/type`, type);
    return data;
};

export const createBrand = async (brand: { name: string }) => {
    const {data} = await $authHost.post(`/api/brand`, brand);
    return data;
};

export const createDevice = async (device: any) => {
    const {data} = await $authHost.post(`/api/device`, device);
    return data;
}

export const fetchTypes = async () => {
    const {data} = await $host.get(`/api/type`);
    return data;
};

export const fetchBrands = async () => {
    const {data} = await $host.get(`/api/brand`);
    return data;
};


export const fetchDevices = async (typeId: string | null, brandId: string | null, page: number, limit = 5) => {
    const {data} = await $host.get(`/api/device`, {
        params: {
            typeId, brandId, page, limit
        }
    });
    return data;
};

export const fetchOneDevice = async (id: number) => {
    const {data} = await $host.get(`/api/device/` + id);
    return data;
}

export const addToBasket = async (deviceId: any) => {
    const {data} = await $authHost.post('/api/basket', deviceId)
    return data
}

export const getBasket = async () => {
    const {data} = await $authHost.get('/api/basket')
    return data
}

export const deleteItemFromBasket = async (id:number) => {
    const {data} = await $authHost.delete('/api/basket/',{
        params:{
            itemId: id
        }
    });
}