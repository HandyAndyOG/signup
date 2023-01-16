export interface States {
    name: string;
    setName: React.Dispatch<React.SetStateAction<string>>;
    email: string;
    setEmail: React.Dispatch<React.SetStateAction<string>>;
    addedUser: number | null;
    setAddedUser: React.Dispatch<React.SetStateAction<number>>;
    error: string;
    setError: React.Dispatch<React.SetStateAction<string>>;
}
export interface Prop {
    setUsers: React.Dispatch<React.SetStateAction<string[] | null>>
}