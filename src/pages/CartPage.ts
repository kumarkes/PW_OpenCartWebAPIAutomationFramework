import { Locator } from "@playwright/test";

export class CartPage {
    private readonly logoutLink: Locator;
    async isLogoutLinkExist(): Promise<boolean> {
        return await this.logoutLink.isVisible();
    }
    }
