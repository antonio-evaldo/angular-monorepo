import type { Meta, StoryObj } from '@storybook/angular';
import { InputReleaseComponent } from '../../../input-release/src/lib/input-release/input-release.component';

const meta: Meta<InputReleaseComponent> = {
  component: InputReleaseComponent,
  title: 'Input',
};
export default meta;
type Story = StoryObj<InputReleaseComponent>;

export const Primary: Story = {
  args: {
    multilinha: false,
  },
};
