import {render, screen} from '@testing-library/react';
import App from './App';
import {fireEvent} from '@testing-library/dom';

test('renders learn react link', async () => {
  render(<App/>);
  fireEvent.click(screen.getByText('fetch'));
  await screen.findByText("Mocked query success", {}, { timeout: 2000 });
});
