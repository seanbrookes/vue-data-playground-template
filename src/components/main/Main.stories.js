import Main from './Main.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  title: 'Main/Main',
  component: Main,
};

export const Default = {
  args: {
    primary: true,
    label: 'Button',
  },
};