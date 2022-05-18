import React, { useState } from 'react';

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

interface Props {
	onchange: (txt: string) => void
}

const categories: string[] = [
	"smartphones",
	"laptops",
	"fragrances",
	"skincare",
	"groceries",
	"home-decoration",
];

export default function Filter({ onchange }: Props) {

	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (txt: string) => {
		onchange(txt);
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="filter"
        aria-controls={open ? 'filter' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Filter
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'filter',
        }}
      >
				{
					categories.map((i, idx) => (
						<MenuItem key={idx}
							onClick={() => handleClose(`?category=${i}`)}
							 sx={{textTransform: 'capitalize'}} >
								{i}
						</MenuItem>
					))
				}
        
      </Menu>
    </div>
  );
}