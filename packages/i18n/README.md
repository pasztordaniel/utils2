# I18N

## Naming convention

> More info in: [i18next.com](https://www.i18next.com/)

```json
{
  // Just frequently used localization keys: save, cancel, submit... etc.
  "common": {
    "save": "Save"
  },
  // the scope is the package/app name
  "web": {
    // section name
    "header": {
      // please use camelCase localization keys
      "logoAltText": "Lorem ipsum dolor sit amet"
    }
  }
}
```

## Usage

In components with `useTranslation` hook:

```tsx
import { useTranslation } from '@package/i18n';
// ...
const { t } = useTranslation();
// ...
<p>{t('common.save')}</p>;
```

In nodejs app:

```ts
import i18n from '@package/i18n';
// ...
return res.status(200).json{{message: i18n.t('api.response.success')}}
```

### Use variables in localization:

In script:

```tsx
<p>{t('ui.main.clickNum', { num: 99 })}</p>
```

In localization json:

```json
{
  "ui": {
    "main": {
      "clickNum": "You clicked at: {{num}} times..."
    }
  }
}
```

### Add HTML tag to translation:

In localization json:

```json
{
  "ui": {
    "profile": {
      "name": "<0>Name: </0>John Doe"
    }
  }
}
```

In script:

```tsx
import { Trans } from '@package/i18n';
//...
<Trans
  i18nKey="ui.profile.name"
  components={[<strong className="text-red" />]}
/>;
// returns: <strong className="text-red">Name: </strong>John Doe
```
