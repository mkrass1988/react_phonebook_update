const token = '5f7b365691f4f13f554c9d7136cd29af4dd20953723b382e'

export const server_calls = {
    get: async () => {
        const response = await fetch(`https://phonebook-dckn.onrender.com/api/contacts`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            }
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from server')
        }

        return await response.json()
    },
    
    create: async(data: any ={}) => {
        const response = await fetch('https://phonebook-dckn.onrender.com/api/contacts',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });

        if (!response.ok){
            throw new Error('Failed to create new data from server')
        }

        return await response.json()
    },

    update: async (id:string, data:any = {}) => {
        const response = await fetch(`https://phonebook-dckn.onrender.com/api/contacts/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`,
            },
            body: JSON.stringify(data)
        });

        if (!response.ok){
            throw new Error('Failed to update this contact')
        }

        return await response.json()
    },

    delete: async(id:string) => {
        const response = await fetch(`https://phonebook-dckn.onrender.com/api/contacts/${id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });

        if (!response.ok){
            throw new Error('Failed to delete this contact')
        }

        return await response.json()
    }
    
}
