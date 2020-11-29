import React, {useState, FormEvent} from 'react';
import { Title, Form, Repositories } from './styles';
import { FiChevronRight } from 'react-icons/fi';
import logoImg from '../../assets/img/logo.svg';
import api from '../../services/api';

interface Repository {
    full_name: string;
    owner: {
        login: string;
        avatar_url: string;
    };
    description: string;
}

const Dashboard: React.FC = () => {

    const [repositories, setRepositories] = useState<Repository[]>([]);
    const [newRepo, setNewRepo] = useState('');

    async function handleAddRepository(event: FormEvent<HTMLFormElement>): Promise<void>{
        console.log(newRepo);
        event.preventDefault();

        const response = await api.get<Repository>(`repos/${newRepo}`);

        setRepositories([...repositories,response.data]);
        setNewRepo('');
    }

    return (
        <>
            <img src={logoImg} alt="Github Explorer"/>
            <Title>Explore Repositórios no Github</Title>

            <Form action="" onSubmit={handleAddRepository}>
                <input 
                    value={newRepo}
                    placeholder="Digite o nome do repositório"
                    onChange={(e) => setNewRepo(e.target.value)}
                />
                <button type="submit">Pesquisar</button>
            </Form>

            <Repositories>
                {repositories.map(repository => (
                    <a href="#">
                    <img 
                    src={repository.owner.avatar_url} 
                    alt={repository.owner.login}
                    />
                    <div>
                        <strong>{repository.full_name}</strong>
                        <p>{repository.description}</p>
                    </div>

                    <FiChevronRight size={20}/>
                </a>
                ))}
                
                
            </Repositories>
        </>
    )
}

export default Dashboard;