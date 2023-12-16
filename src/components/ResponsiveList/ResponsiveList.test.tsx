import { render } from '@testing-library/react';
import ResponsiveList, { defaultGap } from './ResponsiveList';

const testData = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' },
];

test('renders without crashing', () => {
  render(
    <ResponsiveList
      data={testData}
      maxCols={2}
      gap={defaultGap.sm}
      renderItem={(item) => <div key={item.id}>{item.name}</div>}
    />
  );
});

test('renders correct number of items', () => {
  const { container } = render(
    <ResponsiveList
      data={testData}
      maxCols={2}
      gap={defaultGap.sm}
      renderItem={(item) => (
        <div key={item.id} data-testid='list-item'>
          {item.name}
        </div>
      )}
    />
  );

  const items = container.querySelectorAll('[data-testid^="list-item"]');
  expect(items.length).toBe(testData.length);
});
