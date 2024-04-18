import type { Meta, StoryObj } from '@storybook/angular';
import { BotaoComponent } from './botao.component';

const meta: Meta<BotaoComponent> = {
  component: BotaoComponent,
  title: 'BotaoComponent',
};
export default meta;
type Story = StoryObj<BotaoComponent>;

export const Primary: Story = {
  args: {},
};
