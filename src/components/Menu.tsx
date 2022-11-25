import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import GroupsIcon from '@mui/icons-material/Groups';
import SendIcon from '@mui/icons-material/Send';

export const Menu = () => {
    return (
        <div>
            <ul className='menuList'>
                <li><Button href="/home"><HomeIcon/>ホーム</Button></li>
                <li><Button href="/member"><GroupsIcon/>メンバー</Button></li>
                <li><Button href="/contribution"><SendIcon/>貢献</Button></li>
            </ul>
        </div>
    );
};