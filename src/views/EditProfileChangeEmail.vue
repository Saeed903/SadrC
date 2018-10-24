<template>
    <div>
        <div>
            <p>change email address</p>
            <p>after changing your email address.you will have to verify it again.if you dont immediately receive a verification mail after the change,try the following:</p>
            <ul>
                <li>wait for a bit more</li>
                <li>check your spam folder</li>
                <li>use another email address</li>
            </ul>
            <p>if you dont verify your email within 24 hours,we will send another verification mail.if no verification is made within 72 hours,the unverified email address is removed from your account</p>
            <p>you can verify another email address after this.</p>
            <p>because account recovery is linked to your verified email address,you will need to confirm this action with your credentials</p>
        </div>
        <dir>
            <p>please correct the highligted errors</p>
        </dir>
        <div>
            <v-text-field
            v-validate="'required|max:30'"
            v-model="name"
            :counter="30"
            :error-messages="errors.collect('name')"
            label="your password"
            data-vv-name="name"
            class="textField"
            required
            >
            </v-text-field>
            <p>please confirm changing the email address with your password</p>
            <v-text-field
            v-validate="'required|max:20'"
            v-model="password"
            counter="20"
            :error-messages="errors.collect('password')"
            :type="showPassword ? 'text' : 'password'"
            label="new email address"
            class="textField"
            data-vv-name="password"
            required
            >
            </v-text-field>
            <p>please verify you are a human</p>
            <p>im not a robot place</p>
            <v-btn @click="submit" class="primary">change email address</v-btn>
            <v-btn @click="clear" class="primary">clear</v-btn>
        </div>
    </div>
</template>
<script>
 export default {

    data: () => ({
      name: '',
      email: '',
      password:'',
      dictionary: {
        attributes: {
          email: 'E-mail Address'
          // custom attributes
        },
        custom: {
          name: {
            required: () => 'userName or email field is required.',
            max: 'The userName or email field may not be greater than 30 characters'
            // custom messages
          },
        
        }
      },
    }),
    methods: {
      submit () {
        this.$validator.validateAll()
      },
      clear () {
        this.name = ''
        this.email = ''
        this.password = ''
      }
    }
  }

</script>