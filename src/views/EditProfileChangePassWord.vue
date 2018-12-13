<template>
    <div>
        <v-card-text class="fontIran">تغییر رمز ورود</v-card-text>
        <p class="textFont pr-3">تغییر رمز عبور، برنامه شخص ثالث و احراز هویت  شما را بازنویسی میکند.</p>
        <v-flex xl6 lg6 md6 sm9 xs9>
            <v-form>
                <v-text-field
                label="رمز فعلی"
                class="fontIrans"
                color="cyan accent-2"
                type="password"
                clearable
                >
                </v-text-field>

                <v-text-field
                label="رمز جدید"
                class="fontIrans"
                color="cyan accent-2"
                type="password"
                clearable
                >
                </v-text-field>

                <v-text-field
                label="تاییدیه رمز جدید"
                class="fontIrans"
                color="cyan accent-2"
                type="password"
                clearable
                >
                </v-text-field>
                <v-btn
                color="primary"
                class="fontIrans"
                >
                <v-icon size="15px">send</v-icon>
                ارسال تغییرات
                </v-btn>
            </v-form>
        </v-flex>
    </div>
</template>

