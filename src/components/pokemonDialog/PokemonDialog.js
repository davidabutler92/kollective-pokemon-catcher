import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPokemonByIndex } from '../../state/pokemon/pokemon.selectors';
import { addCaughtPokemon } from '../../state/pokemon/pokemon.slice';
import {
  handleNicknameSubmit,
  handleNicknameChange,
  handleClose,
} from './PokemonDialog.helpers';
import { setInLocalStorage } from '../../data/localstorage.helpers';

/** material components */
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function PokemonDialog({
  handleClickClose,
  isOpen,
  pokemonIndex,
}) {
  const [nickname, setNickname] = useState('');
  const selectedPokemon = useSelector((state) =>
    getPokemonByIndex(state, pokemonIndex)
  );
  const dispatch = useDispatch();

  return (
    <Dialog open={isOpen} onClose={handleClickClose}>
      <DialogTitle>
        {selectedPokemon.name} was added to the Pokedex!
      </DialogTitle>
      <form
        onSubmit={(e) =>
          handleNicknameSubmit({
            e,
            addCaughtPokemon,
            dispatch,
            handleClickClose,
            nickname,
            selectedPokemon,
            setNickname,
            setInLocalStorage,
          })
        }
      >
        <DialogContent>
          <DialogContentText>
            Give {selectedPokemon.name} a nickname?
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="nickname"
            label="nickname"
            type="nickname"
            fullWidth
            value={nickname}
            onChange={(e) => handleNicknameChange({ e, setNickname })}
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => handleClose({ setNickname, handleClickClose })}
            color="secondary"
          >
            Cancel
          </Button>
          <Button type="submit" color="primary">
            Submit
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
