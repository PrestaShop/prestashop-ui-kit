export default class LanguagePluralization {
  constructor(locale = undefined) {
    this.locale = typeof locale === 'undefined' ? 'en' : locale;
    this.anyIntervalRegexp = /({\s*(\-?\d+(\.\d+)?[\s*,\s*\-?\d+(\.\d+)?]*)\s*})|([\[\]])\s*(-Inf|\*|\-?\d+(\.\d+)?)\s*,\s*(\+?Inf|\*|\-?\d+(\.\d+)?)\s*([\[\]])/;
  }

  getPluralizedMessage(message, count) {
    const { explicitRules, messageParts } = this.getExplicitRules(message.split('|'));
  }

  getExplicitRules(messageParts) {
    const explicitRules = [];

    for (let i = 0; i < messageParts.length; i++) {
      messageParts[i] = messageParts[i].trim();

      if (this.anyIntervalRegexp.test(messageParts[i])) {
        const messageSpaceSplit = messageParts[i].split(/\s/);
        explicitRules.push(messageSpaceSplit.shift());
        messageParts[i] = messageSpaceSplit.join(' ');
      }
    }

    return { explicitRules, messageParts };
  }
}
